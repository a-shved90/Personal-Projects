<template>
  <div class="resume">
    <div class="container">
      <div class="col__2-3">
        <h2>My job history</h2>
        <p>
          I've been around, moved around, and tried new places. I worked for
          full service agencies and product companies, appreciated both cultures
          and different approaches. Read below or download a
          <a
            href="assets/Alexander_Shved_CV_2019.pdf"
            target="_blank"
            rel="noopener"
            >PDF version</a
          >.
        </p>
        <template v-for="job in jobs">
          <InfoBlock :content="job" :icon="'office'" :key="job.id" />
        </template>
      </div>
      <div class="col__1-3">
        <h3>Things I'm good at</h3>
        <div class="wrapper">
          <template v-for="skill in skills">
            <SkillItem :skill="skill" :key="skill.id" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "../components/InfoBlock.vue";
import SkillItem from "../components/SkillItem.vue";
import data from "../assets/data.json";

export default {
  name: "resume",
  data() {
    return {
      jobs: data.jobs,
      skills: data.skills
    };
  },
  components: {
    InfoBlock,
    SkillItem
  }
};
</script>

<style lang="scss">
.resume {
  $theme: $orange;

  a {
    color: $theme;

    &:hover {
      color: lighten($theme, 15%);
    }
  }

  @include InfoBlock($theme);
  .col__1-3 {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
    }
  }
}
</style>
