<template>
  <article class="infoBlock">
    <div class="infoBlock__infoWrapper">
      <h3 class="infoBlock__title">
        <a :href="link" v-if="link" target="_blank" rel="noopener">
          <svg class="icon" v-if="icon">
            <use :xlink:href="'#'+icon"></use>
          </svg>
          <template v-if="title">{{ title}}</template>
          <template v-if="company">{{ company }}</template>
        </a>
        <template v-else>
          <svg class="icon" v-if="icon">
            <use :xlink:href="'#'+icon"></use>
          </svg>
          <template v-if="title">{{ title}}</template>
          <template v-if="company">{{ company }}</template>
        </template>
      </h3>
      <p class="infoBlock__location" v-if="location">{{ location }}</p>
    </div>
    <div class="infoBlock__infoWrapper" v-if="role || period">
      <h4 class="infoBlock__role" v-if="role">{{ role }}</h4>
      <p class="infoBlock__period" v-if="period">{{ period }}</p>
    </div>
    <p class="InfoBlock__summary" v-if="summary" @click="toggleDesc()" v-html="summary"></p>
    <div class="infoBlock__description" v-if="description" :class="{ open: isOpen }">
      <template v-if="
          Array.isArray(description) && description.length > 1
        ">
        <transition-accordion>
          <div v-show="isOpen">
            <template v-for="text in description">
              <p v-html="text" :key="text.id"></p>
            </template>
          </div>
        </transition-accordion>
        <p class="more" @click="toggleDesc()">Read more</p>
      </template>
      <p v-html="description" v-else></p>
    </div>
  </article>
</template>

<script>
import TransitionAccordion from "../components/TransitionAccordion.vue";
export default {
  name: "InfoBlock",
  props: {
    content: {
      Type: Array
    },
    icon: {
      Type: String
    }
  },
  data() {
    return {
      isOpen: false,
      title: this.content.title,
      link: this.content.link,
      company: this.content.company,
      location: this.content.role,
      role: this.content.role,
      period: this.content.period,
      summary: this.content.summary,
      description: this.content.description
    };
  },
  methods: {
    toggleDesc() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    TransitionAccordion
  }
};
</script>

<style lang="scss">


$theme: $orange;

.infoBlock {
  margin: 20px 0;
  padding: 20px 20px 0;
  border: 1px solid $borderDark;
  background-color: $bgLight;
  position: relative;
  overflow: hidden;


  a {
    color: $theme;
    text-decoration: none;

    &:hover {
      color: lighten($theme, 10%);
      text-decoration: underline;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  &__infoWrapper {
    display: block;
    margin-bottom: 5px;

    h3,
    h4,
    p {
      margin: 0;
    }
  }
  &__title,
  &__location,
  &__role,
  &__period {
    display: inline-block;
  }

  &__title,
  &__role {
    padding-right: 20px;
  }

  &__title {
    position: relative;
    padding-left: 25px;

    &:hover {
      .icon use {
        fill: lighten($theme, 10%);
      }
    }

    .icon {
      position: absolute;
      left: 0;
      top: -2px;
    }
  }

  &__location {
    color: $lightTextColor;
  }

  &__period {
    color: $lightTextColor;
  }

  &__description {
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
      padding-bottom: 20px;
      margin: 0;
      position: relative;
      z-index: 1;
      cursor: pointer;
    }
    &.open {
      .more {
        padding-top: 10px;
      }
    }
  }
}
</style>
