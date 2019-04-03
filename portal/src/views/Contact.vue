<template>
  <div class="contact">
    <h1>contact me</h1>
    <div class="container">
      <div class="col__1-2">
        <h2>Highlight of my work</h2>
        <template v-for="(link, id) in socials">
          <SocialItem :link="link" :icon="id" :key="link.id" />
        </template>
      </div>
      <div class="col__1-2">
        <h2>Things that I find exciting</h2>
        <p>contact form goes here</p>
      </div>
    </div>
    <!-- https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app -->
  </div>
</template>

<script>
import SocialItem from "../components/SocialItem.vue";
import data from "../assets/data.json";
export default {
  name: "contact",
  data() {
    return {
      socials: data.profile.social
    };
  },
  components: {
    SocialItem
  }
};
</script>

<style lang="scss">
.contact {
  $theme: $purple;

  a {
    color: $theme;

    &:hover {
      color: lighten($theme, 15%);
    }
  }
}
</style>
