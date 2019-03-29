<template>
  <div class="home">
    <div class="intro">
      <h1>'ello!</h1>
      <p>
        I'm a web developer based in Bristol. My main focus is front end
        development, although I seem to be branching off to engineering side of
        things with Vue and single page app development.
      </p>
      <p>
        This page is a little portal for all thing "me", for now its a basic
        resume with all the core information. But I plan to expand this into a
        more comprehensive portal in the near future.
      </p>
    </div>
    <div class="container">
      <div class="col__1-2">
        <h2>Work experience</h2>
        <p>
          Last workplace. For all the rest, check out my
          <a href="/resume">resume</a>
        </p>
        <JobItem :job="jobs" />
      </div>
      <div class="col__1-2">
        <h2>Projects</h2>
        <p>
          Very WIP section with both completed work and planned projects, have a
          look in <a href="/portfolio">portfolio</a>.
        </p>
        <ProjectItem :project="projects" />
      </div>
    </div>
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import ProjectItem from "../components/ProjectItem.vue";
import data from "../assets/data.json";

export default {
  name: "home",
  data() {
    return {
      jobs: data.jobs[0],
      projects: data.projects[0]
    };
  },
  components: {
    JobItem,
    ProjectItem
  }
};
</script>

<style scoped lang="scss">
$theme: $green;

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}

.intro p {
  font-size: 20px;
  line-height: 26px;
}
</style>
