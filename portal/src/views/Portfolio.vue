<template>
  <div class="portfolio">
    <h1>Portfolio and things I worked on</h1>
    <p>
      The WIPest of the WIP sections, while I hunt down things from previous
      workplaces and put them all together, come up with images and do a nice
      writeup.
    </p>
    <div class="container">
      <div class="col__1-2">
        <h2>Highlight of my work</h2>
        <template v-for="example in examples">
          <PortfolioItem :example="example" :key="example.id" />
        </template>
      </div>
      <div class="col__1-2">
        <h2>Things that I find exciting</h2>
        <template v-for="project in projects">
          <ProjectItem :project="project" :key="project.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem.vue";
import ProjectItem from "../components/ProjectItem.vue";
import data from "../assets/data.json";

export default {
  name: "portfolio",
  data() {
    return {
      projects: data.projects,
      examples: data.portfolio
    };
  },
  components: {
    ProjectItem,
    PortfolioItem
  }
};
</script>

<style scoped lang="scss">
$theme: $blue;

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}
</style>
