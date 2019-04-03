<template>
  <div class="classmate">
    <a
      class="classmate__url"
      :href="'https://www.facebook.com/' + classmate.id"
      target="_blank"
      rel="noopener"
    >
      <div
        class="classmate__cover"
        :style="'background-image: url(' + coverImgUrl(classmate.name) + ');'"
      >
        <img class="classmate__profile" :src="profileImgUrl(classmate.name)" />
      </div>
    </a>
    <div class="classmate__details">
      <h4 class="classmate__name">{{ classmate.name }}</h4>
      <p v-if="classmate.location" class="classmate__location">
        <svg class="icon">
          <use xlink:href="#location"></use>
        </svg>
        {{ classmate.location }} - {{ classmate.country }}
      </p>
      <p v-if="classmate.birthday" class="classmate__birthday">
        <svg class="icon">
          <use xlink:href="#birthday"></use>
        </svg>
        {{ dateFormat(classmate.birthday) }}
      </p>
      <p v-if="classmate.mobile" class="classmate__mobile">
        <svg class="icon">
          <use xlink:href="#mobile"></use>
        </svg>
        {{ classmate.mobile }}
      </p>
      <div class="classmate__social">
        <SocialItem
          :link="'https://www.facebook.com/' + classmate.id"
          :icon="'facebook'"
          :text="false"
        />
        <template v-if="classmate.social">
          <template v-for="(link, key) in classmate.social">
            <SocialItem
              :link="link"
              :icon="key"
              :text="false"
              :key="link.key"
            />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormatMixin from "../mixins/dateFormatMixin";
import SocialItem from "../components/SocialItem.vue";
export default {
  name: "ClassItem",
  props: {
    classmate: Array
  },
  components: {
    SocialItem
  },
  mixins: [dateFormatMixin],
  methods: {
    profileImgUrl(url) {
      let string = url
        .toLowerCase()
        .split(" ")
        .slice(-1);
      if (url) {
        return require("../assets/classmates/" + string + ".jpg");
      }
    },
    // This needs an error catcher of some kind if images 404s
    coverImgUrl(url) {
      let string = url
        .toLowerCase()
        .split(" ")
        .slice(-1);
      if (url) {
        return require("../assets/classmates/" + string + "Cover.jpg");
      }
    }
  }
};
</script>

<style lang="scss">
$theme: #424242;
$color: #fff;
$border: #4267b2;

.classmate {
  background-color: $theme;
  border-radius: 10px;
  border: 1px solid $border;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  &__cover {
    background-color: black;
    background-size: cover;
    background-position: center center;
    min-height: 120px;
    position: relative;
  }

  &__profile {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50px;
    border: 2px solid white;
    z-index: 1;
    position: absolute;
    bottom: -30px;
    right: 30px;
  }

  &__details {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 10px 10px;

    p .icon {
      position: absolute;
      top: 3px;
      left: 0;
      width: 15px;
      height: 15px;
      use {
        fill: white;
      }
    }
  }

  &__name {
    color: $color;
    margin: 0 0 10px;
    text-transform: capitalize;
  }

  &__location,
  &__birthday,
  &__mobile {
    color: $color;
    margin: 0;
    position: relative;
    padding: 3px 0 3px 20px;
  }

  &__social {
    display: flex;
    flex: 1;
    margin-top: 10px;

    .socialLink {
      position: relative;
      align-self: flex-end;
      width: 45px;
      height: 45px;

      .icon {
        position: absolute;
        top: 0;
        left: 0;
      }

      .instagram use {
        fill: #d000ba;
      }

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }

  &:hover {
    background: lighten($theme, 5%);

    .classmate__profile {
      transform: scale(1.05);
    }
  }
}
</style>
