<template>
  <div class="portfolio">
    <h1>portfolio and things I worked on</h1>
    <div class="container">
      <div class="col__1-2">
        <h3>Portfolio pieces</h3>
        <p>
          WIP section while I hunt down things from previous workplaces and put
          them all together in a neat JSON file, come up with images and logos
          and make it all nice and fancy
        </p>
        <p>
          Here's a rough url list of sites I worked on, and check back here
          later
        </p>
        <ul>
          <li>
            <a
              href="https://www.element78.co.uk/"
              target="_blank"
              rel="noopener"
              >https://www.element78.co.uk/</a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20170929043407/https://brandimpactawards.com/"
              target="_blank"
              rel="noopener"
              >https://brandimpactawards.com/</a
            >
          </li>
          <li>
            <a href="https://squashskills.com/" target="_blank" rel="noopener"
              >https://squashskills.com/</a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20160331145150/http://www.malfordoflondon.com/"
              target="_blank"
              rel="noopener"
              >http://www.malfordoflondon.com/</a
            >
          </li>
          <li>
            <a
              href="https://github.com/shved90/Freelance"
              target="_blank"
              rel="noopener"
              >List of static sites I've worked on</a
            >
          </li>
        </ul>
        <p>
          And my
          <a href="https://github.com/shved90" target="_blank" rel="noopener"
            >Github repo</a
          >
          if thats your thing
        </p>
      </div>
      <div class="col__1-2">
        <h2>Projects I want to do</h2>
        <template v-for="project in projects">
          <ProjectItem :project="project" :key="project.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "../components/ProjectItem.vue";
import data from "../assets/data.json";

export default {
  name: "portfolio",
  data() {
    return {
      projects: data.projects
    };
  },
  components: {
    ProjectItem
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
