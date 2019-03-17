<template>
  <div id="app">
    <Navigation></Navigation>
    <div id="main">
      <transition-page>
        <router-view />
      </transition-page>
    </div>
    <IconSvg></IconSvg>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TransitionPage from "./components/TransitionPage.vue";
import IconSvg from "./components/IconSvg.vue";

export default {
  components: {
    Navigation,
    TransitionPage,
    IconSvg
  }
};
</script>
