<template>
  <div class="contact">
    <h1>Contact page</h1>
    <div class="container">
      <div class="col__1-2">
        <h2>Find me on socials</h2>
        <SocialItem
          :link="'mailto:' + socials.email"
          :icon="'contact'"
          :text="true"
        />
        <template v-for="(link, id) in socials">
          <SocialItem :link="link" :icon="id" :text="true" :key="link.id" />
        </template>
      </div>
      <div class="col__1-2">
        <h2>Contact form</h2>
        <p>WIP</p>
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

  .socialLink {
    display: inline-block;
    width: 130px;
    height: 130px;
    margin: 5px;
    padding: 40px;
    text-align: center;
    position: relative;

    .icon {
      z-index: 1;
    }

    p {
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;
      opacity: 0;
      color: white;
      margin: 0;
    }

    &:hover {
      background: $bgLight;

      .icon {
        transform: scale(1.2);
      }
      p {
        text-decoration: underline;
        bottom: 10px;
        opacity: 1;
      }
    }

    .contact {
      use {
        fill: $theme;
      }
    }
  }
}
</style>
