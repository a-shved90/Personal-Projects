<template>
  <span>
    <svg class="icon" v-if="icon">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <template>{{ title }}</template>
  </span>
</template>

<script>
export default {
  name: "InfoBlockTitle",
  props: {
    title: String,
    icon: String
  },
  
};
</script>