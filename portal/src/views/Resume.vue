<template>
  <div class="resume">
    <div class="container">
      <div class="col__2-3">
        <h2>Places I worked at</h2>
        <template v-for="job in jobs">
          <JobItem :job="job" :key="job.id" />
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
import JobItem from "../components/JobItem.vue";
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
    JobItem,
    SkillItem
  }
};
</script>

<style lang="scss" scoped>
.resume {
  .col__1-3 {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
    }
  }
}
</style>
