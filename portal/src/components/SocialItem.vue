<template>
  <a
    class="socialLink"
    :href="link"
    target="_blank"
    rel="noopener"
    v-if="icon != 'email'"
  >
    <p>{{ icon }}</p>
    <svg class="icon" :class="icon">
      <use :xlink:href="'#' + icon"></use>
    </svg>
  </a>
</template>

<script>
export default {
  name: "SocialItem",
  props: {
    link: String,
    icon: String
  }
};
</script>

<style scoped lang="scss">
.socialLink {
  display: inline-block;
  width: 100px;
  height: 100px;

  .icon {
    width: 50px;
    height: 50px;
  }

  .facebook use {
    fill: $purple;
  }
}
</style>
