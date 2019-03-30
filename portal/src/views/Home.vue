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
      <div class="col__1-2 resume">
        <h2>Work experience</h2>
        <p>
          Last workplace. For all the rest, check out my
          <a href="/resume" class="link">resume</a>
        </p>
        <InfoBlock :content="jobs" :icon="'office'"/>
      </div>
      <div class="col__1-2 portfolio">
        <h2>Projects</h2>
        <p>
          Very WIP section with both completed work and planned projects, have a
          look in
          <a href="/portfolio" class="link">portfolio</a>.
        </p>
        <InfoBlock :content="projects" :icon="'lightbulb'"/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "../components/InfoBlock.vue";
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
    InfoBlock
  }
};
</script>

<style lang="scss">
.home {
  $theme: $green;

  .link {
    color: $theme;

    &:hover {
      color: lighten($theme, 15%);
    }
  }

  .intro p {
    font-size: 20px;
    line-height: 26px;
  }
}
</style>
