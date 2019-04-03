<template>
  <div id="app">
    <Navigation></Navigation>
    <div id="main">
      <transition-page>
        <router-view />
      </transition-page>
    </div>
    <SvgIconList></SvgIconList>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TransitionPage from "./components/TransitionPage.vue";
import SvgIconList from "./components/SvgIconList.vue";

export default {
  components: {
    Navigation,
    TransitionPage,
    SvgIconList
  }
};
</script>
