<template>
  <article class="infoBlock">
    <div class="infoBlock__infoWrapper">
      <h3 class="infoBlock__title">
        <a :href="link" v-if="link" :title="blockName" target="_blank" rel="noopener">
          <InfoBlockTitle :title="blockName" :icon="icon"/>
        </a>
        <InfoBlockTitle v-else :title="blockName" :icon="icon"/>
      </h3>
      <p class="infoBlock__location" v-if="location">{{ location }}</p>
    </div>
    <div class="infoBlock__infoWrapper" v-if="role || period">
      <h4 class="infoBlock__role" v-if="role">{{ role }}</h4>
      <p class="infoBlock__period" v-if="period">{{ period }}</p>
    </div>
    <template v-if="Array.isArray(summary) && summary.length > 1">
      <div class="InfoBlock__summary" @click="toggleDesc()">
        <template v-for="text in summary">
          <p v-html="text" :key="text.id"></p>
        </template>
      </div>
    </template>
    <p class="InfoBlock__summary" v-else @click="toggleDesc()" v-html="summary"></p>
    <div class="infoBlock__description" v-if="description" :class="{ open: isOpen }">
      <template v-if="Array.isArray(description) && description.length > 1">
        <transition-accordion>
          <div
            v-show="isOpen"
            role="region"
            :aria-labelledby="'label-' + uuid"
            :id="'controls-' + uuid"
          >
            <template v-for="text in description">
              <p v-html="text" :key="text.id"></p>
            </template>
          </div>
        </transition-accordion>
        <button
          class="more"
          :id="'label-' + uuid"
          :aria-expanded="isOpen ? 'true' : 'false'"
          :aria-controls="'controls-' + uuid"
          @click="toggleDesc()"
        >{{ isOpen ? "Read less" : "Read more" }}</button>
      </template>
      <p v-html="description" v-else></p>
    </div>
  </article>
</template>

<script>
import TransitionAccordion from "../components/TransitionAccordion.vue";
import InfoBlockTitle from "../components/InfoBlockTitle.vue";
import InfoBlockContent from "../components/InfoBlockContent.vue";
import idGenerator from "../mixins/idGenerator.js";

export default {
  name: "InfoBlock",
  props: {
    content: Object,
    icon: String
  },
  data() {
    return {
      isOpen: false,
      title: this.content.title,
      link: this.content.link,
      company: this.content.company,
      location: this.content.location,
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
  mixins: [idGenerator],
  computed: {
    blockName: function() {
      return this.company ? this.company : this.title;
    }
  },
  components: {
    TransitionAccordion,
    InfoBlockTitle,
    InfoBlockContent
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
