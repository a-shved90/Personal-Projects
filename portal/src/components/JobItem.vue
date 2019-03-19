<template>
  <section class="job">
    <div class="job__infoWrapper">
      <h3 class="job__company">
        <a :href="job.link" class="job_link link" target="_blank">
          {{ job.company }}
        </a>
      </h3>
      <p class="job__location">{{ job.location }}</p>
    </div>
    <div class="job__infoWrapper">
      <h4 class="job__role">{{ job.role }}</h4>
      <p class="job__period">{{ job.period }}</p>
    </div>
    <div
      class="job__description"
      :class="{ open: isOpen }"
      v-for="item in job.description"
      :key="item.id"
    >
      <p class="short" @click="toggleDesc()">{{ item.short }}</p>
      <transition-accordion>
        <div
          class="p"
          v-show="isOpen"
          v-if="Array.isArray(item.long) && item.long.length > 1"
        >
          <template v-for="text in item.long">
            <p v-html="text" :key="text.id"></p>
          </template>
        </div>
        <p class="long" v-html="item.long" v-else v-show="isOpen"></p>
      </transition-accordion>
      <p v-if="item.long" class="more" @click="toggleDesc()">Read more</p>
    </div>
  </section>
</template>

<script>
import TransitionAccordion from "../components/TransitionAccordion.vue";
export default {
  name: "JobItem",
  props: {
    job: {
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
$theme: $orange;

.link {
  color: $theme;
  text-decoration: none;

  &:hover {
    color: lighten($theme, 10%);
    text-decoration: underline;
  }
}
.job {
  margin: 20px 0;
  padding: 20px 20px 0;
  border: 1px solid $borderDark;
  background-color: $bgLight;
  position: relative;
  overflow: hidden;

  &__infoWrapper {
    display: block;
    margin-bottom: 5px;

    h3,
    h4,
    p {
      margin: 0;
    }
  }
  &__company,
  &__location,
  &__role,
  &__period {
    display: inline-block;
  }

  &__company,
  &__role {
    padding-right: 20px;
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

/*
TODO: have a look at
https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
for smooth transition
*/
</style>
