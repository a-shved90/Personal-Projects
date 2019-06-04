<template>
  <a
    class="socialLink"
    :href="link"
    target="_blank"
    rel="noopener"
    :title="'link to ' + icon"
    v-if="icon != 'email'"
  >
    <svg class="icon" :class="icon">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <p v-if="text">{{ icon }}</p>
  </a>
</template>

<script>
export default {
  name: "SocialItem",
  props: {
    link: String,
    icon: String,
    text: Boolean
  }
};
</script>

<style scoped lang="scss">
.socialLink {
  display: inline-block;
  text-align: center;

  p {
    margin: 0;
  }

  .icon {
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
