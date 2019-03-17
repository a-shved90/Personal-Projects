<template>
  <section class="project">
    <h3 class="project__title">{{ project.title }}</h3>
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
//console.log(data.jobs[3].description[0].long.length);
</script>

<style lang="scss">
$theme: $blue;

.project {
  padding: 20px;
  margin: 20px 0;
  background-color: $bgLight;

  &__title {
    margin: 0;
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
