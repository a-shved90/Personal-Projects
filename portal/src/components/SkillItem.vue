<template>
  <section class="skill" :class="{ open: isOpen }">
    <p class="skill__name" @click="toggleDesc()">
      <svg class="icon icon--skill">
        <use :xlink:href="'#' + skill.logo" :class="skill.logo"></use>
      </svg>
      {{ skill.name }}
      <svg class="icon icon--chevron">
        <use xlink:href="#chevron"></use>
      </svg>
    </p>
    <transition-accordion>
      <p class="skill__description" v-show="isOpen">{{ skill.description }}</p>
    </transition-accordion>
  </section>
</template>

<script>
import TransitionAccordion from "../components/TransitionAccordion.vue";
export default {
  name: "SkillItem",
  props: {
    skill: Object
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

<style scoped lang="scss">
.skill {
  background-color: $bgLight;
  border: 1px solid $borderDark;
  overflow: hidden;

  .skill__name {
    margin: 0;
    padding: 15px 45px;
    cursor: pointer;
    position: relative;
  }

  .skill__description {
    margin: 0;
    padding: 0 20px;
  }

  .icon {
    position: absolute;
    top: calc(50% - 10px);
    width: 20px;
    height: 20px;

    &--skill {
      left: 15px;

      .javascript {
        fill: #dab92d;
      }
      .responsive {
        fill: white;
      }
      .accessibility {
        fill: #186496;
      }
      .git {
        fill: #f05033;
      }
    }

    &--chevron {
      right: 15px;

      use {
        fill: $orange;
      }
    }
  }

  &.open {
    padding-bottom: 15px;
    .icon--chevron {
      transform: rotate(90deg);
    }
  }

  &__name {
    margin: 5px 0;
  }
}
</style>
