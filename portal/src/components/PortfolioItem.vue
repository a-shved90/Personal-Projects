<template>
  <section class="example">
    <h3 class="example__title">
      <svg class="icon">
        <use xlink:href="#portfolio"></use>
      </svg>
      <a :href="example.url" target="_blank" rel="noopener">{{
        example.title
      }}</a>
    </h3>

    <p class="summary" @click="toggleDesc()" v-html="example.summary"></p>
    <div class="example__description" :class="{ open: isOpen }">
      <div
        v-if="
          Array.isArray(example.description) && example.description.length > 1
        "
      >
        <transition-accordion>
          <div v-show="isOpen">
            <template v-for="text in example.description">
              <p v-html="text" :key="text.id"></p>
            </template>
          </div>
        </transition-accordion>
        <p class="more" @click="toggleDesc()">Read more</p>
      </div>
      <p v-html="example.description" v-else></p>
    </div>
  </section>
</template>

<script>
import TransitionAccordion from "../components/TransitionAccordion.vue";
export default {
  name: "PortfolioItem",
  props: {
    example: {
      Type: Array
    }
  },
  data() {
    return {
      isOpen: false
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
$theme: $blue;

.example {
  margin: 20px 0;
  padding: 20px 20px 0;
  border: 1px solid $borderDark;
  background-color: $bgLight;
  position: relative;
  overflow: hidden;

  &__title {
    margin: 0;
    padding-left: 40px;
    position: relative;

    .icon {
      position: absolute;
      top: -5px;
      left: 0;
      width: 30px;
      height: 30px;

      use {
        fill: $blue;
      }

      .bob {
        fill: $orange;
      }
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

  &__company,
  &__role {
    padding-right: 20px;
  }

  &__company {
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
    p {
      margin: 10px 0;
      line-height: 21px;
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
