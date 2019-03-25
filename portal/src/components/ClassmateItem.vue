<template>
  <div class="classmate">
    <a
      class="classmate__url"
      :href="'https://www.facebook.com/' + classmate.id"
      target="_blank"
      rel="noopener"
    >
      <div
        class="classmate__cover"
        :style="'background-image: url(' + coverImgUrl(classmate.name) + ');'"
      >
        <img class="classmate__profile" :src="profileImgUrl(classmate.name)" />
      </div>
    </a>
    <div class="classmate__details">
      <h4 class="classmate__name">{{ classmate.name }}</h4>
      <p v-if="classmate.location" class="classmate__location">
        <svg class="icon">
          <use xlink:href="#location"></use>
        </svg>
        {{ classmate.location }} - {{ classmate.country }}
      </p>
      <p v-if="classmate.birthday" class="classmate__birthday">
        <svg class="icon">
          <use xlink:href="#birthday"></use>
        </svg>
        {{ dateFormat(classmate.birthday) }}
      </p>
      <p v-if="classmate.mobile" class="classmate__mobile">
        <svg class="icon">
          <use xlink:href="#mobile"></use>
        </svg>
        {{ classmate.mobile }}
      </p>
      <div class="classmate__social">
        <!-- social links can be a component -->
        <a
          class="social__url"
          v-if="classmate.id"
          :href="'https://www.facebook.com/' + classmate.id"
          target="_blank"
          rel="noopener"
        >
          <svg class="icon">
            <use xlink:href="#facebook"></use>
          </svg>
        </a>
        <template v-if="classmate.social">
          <a
            v-for="(item, key) in classmate.social"
            class="social__url"
            :class="key"
            :href="item"
            :title="key"
            target="_blank"
            rel="noopener"
          >
            <svg class="icon">
              <use :xlink:href="'#' + key"></use>
            </svg>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormatMixin from "../mixins/dateFormatMixin";
export default {
  name: "ClassItem",
  props: {
    classmate: {
      Type: Array
    }
  },
  mixins: [dateFormatMixin],
  methods: {
    profileImgUrl(url) {
      let string = url
        .toLowerCase()
        .split(" ")
        .slice(-1);
      if (url) {
        return require("../assets/classmates/" + string + ".jpg");
      }
    },
    // This needs an error catcher of some kind if images 404s
    coverImgUrl(url) {
      let string = url
        .toLowerCase()
        .split(" ")
        .slice(-1);
      if (url) {
        return require("../assets/classmates/" + string + "Cover.jpg");
      }
    }
  }
};
</script>

<style lang="scss">
$theme: #4267b2;
$color: white;

.classmate {
  background-color: $theme;
  border-radius: 10px;
  border: 1px solid $theme;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  &__cover {
    background-color: black;
    background-size: cover;
    background-position: center center;
    min-height: 120px;
    position: relative;
  }

  &__profile {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50px;
    border: 2px solid white;
    z-index: 1;
    position: absolute;
    bottom: -30px;
    right: 30px;
  }

  &__details {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 10px 10px;
  }

  &__name {
    color: $color;
    margin: 0 0 10px;
    text-transform: capitalize;
  }

  .icon {
    position: absolute;
    top: 3px;
    left: 0;
    width: 15px;
    height: 15px;

    use {
      fill: white;
    }
  }

  &__location,
  &__birthday,
  &__mobile {
    color: $color;
    margin: 0;
    position: relative;
    padding: 3px 0 3px 20px;
  }

  &__social {
    display: flex;
    flex: 1;
    margin-top: 10px;

    .social__url {
      position: relative;
      align-self: flex-end;
      width: 30px;
      height: 30px;

      .icon {
        width: 30px;
        height: 30px;
      }

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}
</style>
