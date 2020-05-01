<template>
  <article class="blog__item">
    <h2 class="blog__title">
      <svg class="icon" v-if="icon">
        <use :xlink:href="'#' + icon"></use>
      </svg>
      {{ title }}
    </h2>
    <p class="blog__published">
      Published on <time :datetime="created">{{ created }}</time>
    </p>
    <ul class="blog__tags">
      <template v-for="tag in tags">
        <li class="blog__tag" :key="tag.id">{{ tag }}</li>
      </template>
    </ul>
    <p class="blog__overview">{{ overview }}</p>
    <div class="blog__content">{{ contents }}</div>
  </article>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    content: Object,
    icon: String
  },
  data() {
    return {
      title: this.content.title,
      created: this.content.date_created,
      tags: this.content.tags,
      overview: this.content.overview,
      contents: this.content.content
    };
  }
};
</script>

<style lang="scss">
$theme: $purple;

.blog {
  &__item {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid $borderDark;
    background-color: $bgLight;
    position: relative;
    overflow: hidden;

    &:first-of-type{
      margin-top: 0;
    }
  }

  a {
    color: $theme;
    text-decoration: none;

    &:hover {
      color: lighten($theme, 10%);
      text-decoration: underline;
    }
  }

  &__title {
    margin: 0;
    color: $theme;

    .icon {
      width: 20px;
      height: 20px;

      use {
        fill: $theme;
      }
    }
  }

  &__title,
  &__published {
    display: inline-block;
  }

  &__title,
  &__tags {
    padding-right: 20px;
  }

  &__title {
    position: relative;
    padding-left: 30px;

    .icon {
      position: absolute;
      left: 0;
      top: 3px;
    }
  }

  &__published {
    color: $lightTextColor;
  }

  &__tags {
    padding: 0;
    margin: 0;

    .blog__tag{
      cursor: pointer;
      display: inline-block;
      padding: 3px 5px 3px 18px;
      border: 1px solid $mainTextColor;
      border-radius: 5px;
      margin-right: 15px;
      position: relative;
      &:before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: $mainTextColor;
        border-radius: 10px;
        position: absolute;
        top: 9px;
        left: 7px;
      }

      &:hover {
        background-color: $theme;
        color: white;

        &:before{
          background-color: white;
        }
      }
    }
  }

  &__overview {
    .short {
      margin: 10px 0;
    }
    .long {
      margin: 0;
    }
    .more {
      color: $theme;
      text-decoration: underline;
      background: $bgLight;
      margin-bottom: 20px;
      padding: 0;
      border: none;
      font-size: 16px;
      position: relative;
      z-index: 1;
      cursor: pointer;
    }
    &.open {
      .more {
        margin-top: 10px;
      }
    }
  }
}
</style>
