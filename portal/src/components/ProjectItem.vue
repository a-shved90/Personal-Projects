<template>
  <section class="project">
    <h3 class="project__title">
      <svg class="icon">
        <use xlink:href="#light-bulb"></use>
      </svg>
      {{ project.title }}
    </h3>
    <p
      class="project__description"
      v-if="
        Array.isArray(project.description) && project.description.length > 1
      "
    >
      <template v-for="text in project.description">
        <p v-html="text" :key="text.id"></p>
      </template>
    </p>
    <p class="project__description" v-html="project.description" v-else></p>
  </section>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: {
      Type: Array
    }
  }
};
</script>

<style lang="scss">
$theme: $blue;

.project {
  padding: 20px;
  margin: 20px 0;
  background-color: $bgLight;

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

    &:hover {
      color: lighten($theme, 15%);
    }
  }

  &__name {
    margin-bottom: 0;
  }
}
</style>
