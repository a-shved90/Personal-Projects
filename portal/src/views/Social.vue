<template>
  <div class="contact">
    <h1>My socials</h1>
    <SocialItem
      :link="'mailto:' + socials.email"
      :icon="'contact'"
      title="link to email"
      :text="true"
    />
    <template v-for="(link, id) in socials">
      <SocialItem :link="link" :icon="id" :text="true" :key="link.id" />
    </template>
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
