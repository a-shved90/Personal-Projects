<template>
  <nav id="nav" @click="navToggle" :class="{ active: isOpen }">
    <router-link to="/" class="home">
      <svg class="icon icon--home">
        <use xlink:href="#home"></use>
      </svg>
      <p>Home</p>
    </router-link>
    <router-link to="/resume" class="resume">
      <svg class="icon icon--resume">
        <use xlink:href="#resume"></use>
      </svg>
      <p>Resume</p>
    </router-link>
    <router-link to="/portfolio" class="portfolio">
      <svg class="icon icon--portfolio">
        <use xlink:href="#portfolio"></use>
      </svg>
      <p>Portfolio</p>
    </router-link>
    <router-link to="/blog" class="blog">
      <svg class="icon icon--blog">
        <use xlink:href="#blog"></use>
      </svg>
      <p>Blog</p>
    </router-link>
    <!-- <router-link to="/social" class="social">
      <svg class="icon icon--social">
        <use xlink:href="#contact"></use>
      </svg>
      <p>Social</p>
    </router-link> -->
    <button class="navToggle">
      <span></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    navToggle(e) {
      if (
        e.target.classList.contains("navToggle") ||
        e.target.parentNode.classList.contains("navToggle")
      ) {
        this.isOpen = !this.isOpen;
      } else if (
        e.target.hasAttribute("href") ||
        e.target.parentNode.hasAttribute("href") ||
        e.target.parentNode.parentNode.hasAttribute("href")
      ) {
        this.isOpen = !this.isOpen;
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  }
};
</script>

<style scoped lang="scss">
#nav {
  position: fixed;
  z-index: 10;
  top: -100%;
  left: 0;
  width: 100%;
  min-height: 100vh;

  &.active {
    top: 0;
    background-color: $navBg;

    // a:nth-child(5) {
    //   bottom: (100% / 5) * 0;
    //   transition: all 0.7s ease;
    // }

    a:nth-child(4) {
      bottom: (100% / 4) * 0;
      transition: all 0.6s ease;
    }

    a:nth-child(3) {
      bottom: (100% / 4) * 1;
      transition: all 0.5s ease;
    }

    a:nth-child(2) {
      bottom: (100% / 4) * 2;
      transition: all 0.4s ease;
    }

    a:nth-child(1) {
      bottom: (100% / 4) * 3;
      transition: all 0.3s ease;
    }

    .navToggle {
      background: $navToggle;

      span {
        background-color: transparent;
        transform: rotate(45deg);

        &:before {
          transform: rotate(45deg);
          bottom: 0;
        }
        &:after {
          transform: rotate(-45deg);
          bottom: 0;
        }
      }
    }
  }

  .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 20px;

    &--home use {
      fill: $green;
    }
    &--resume use {
      fill: $orange;
    }
    &--portfolio use {
      fill: $blue;
    }
    &--blog use {
      fill: $purple;
    }
  }

  a {
    background-color: $navBg;
    font-weight: bold;
    display: block;
    padding: 30px;
    height: calc(100vh / 4);
    width: 100%;
    text-decoration: none;
    border-bottom: 1px solid $borderDark;
    color: white;
    position: absolute;
    bottom: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      $opacity: 0.3;
      &.home {
        background-color: rgba($green, $opacity);
      }
      &.resume {
        background-color: rgba($orange, $opacity);
      }
      &.portfolio {
        background-color: rgba($blue, $opacity);
      }
      &.blog {
        background-color: rgba($purple, $opacity);
      }
      &.social {
        background-color: rgba($purple, $opacity);
      }
    }

    &.router-link-exact-active {
      $opacity: 0.5;
      &.home {
        background-color: rgba($green, $opacity);
      }
      &.resume {
        background-color: rgba($orange, $opacity);
      }
      &.portfolio {
        background-color: rgba($blue, $opacity);
      }
      &.blog {
        background-color: rgba($purple, $opacity);
      }
      &.social {
        background-color: rgba($purple, $opacity);
      }
    }

    &.disabled {
      cursor: not-allowed;
      text-decoration: line-through;

      &:hover,
      &.router-link-exact-active {
        background-color: $navBg;
      }

      .icon use {
        fill: grey;
      }
    }
  }

  .navToggle {
    width: 130px;
    height: 130px;
    display: block;
    position: fixed;
    right: -65px;
    top: -65px;
    transform: rotate(45deg);
    background: $navToggleActive;
    border: none;
    cursor: pointer;
    z-index: 15;
    outline: none;

    span {
      width: 30px;
      height: 3px;
      position: absolute;
      bottom: 27px;
      left: 49px;
      background-color: black;
      transform: rotate(-45deg);
      transition: all 0.2s ease-in-out;

      &:after,
      &:before {
        transition: all 0.1s ease-in-out;
        content: "";
        width: 30px;
        height: 3px;
        position: absolute;
        left: 0;
        background-color: black;
      }

      &:after {
        bottom: -7px;
      }

      &:before {
        bottom: 7px;
      }
    }
  }
}

@media all and (min-width: 1024px) {
  #nav {
    height: 100%;
    position: relative;
    left: auto;
    top: auto;

    a {
      position: relative;
      bottom: auto;
    }

    &.active a {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        bottom: auto;
      }
    }

    .navToggle {
      display: none;
    }
  }
}
</style>
