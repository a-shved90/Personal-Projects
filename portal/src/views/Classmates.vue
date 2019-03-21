<template>
  <div class="classmates">
    <h1>facebook sdk things</h1>
    <div class="classmates__wrapper">
      <div
        class="classmate"
        v-for="classmate in classmates"
        :key="classmate.id"
      >
        <a
          class="classmate__url"
          :href="'https://www.facebook.com/' + classmate.id"
          target="_blank"
          rel="noopener"
        >
          <div
            class="classmate__cover"
            :style="
              'background-image: url(' + buildImgUrl(classmate.coverImg) + ');'
            "
          >
            <img
              class="classmate__profile"
              :src="buildImgUrl(classmate.profileImg)"
            />
          </div>
        </a>
        <div class="classmate__details">
          <h4 class="classmate__name">{{ classmate.name }}</h4>
          <p v-if="classmate.location" class="classmate__location">
            {{ classmate.location }} - {{ classmate.country }}
          </p>
          <p v-if="classmate.birthday" class="classmate__birthday">
            {{ classmate.birthday }}
          </p>
          <div class="social">
            <a
              class="social__url"
              :href="'https://www.facebook.com/' + classmate.id"
              target="_blank"
              rel="noopener"
              >fb</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classmates from "../assets/classmates.json";
export default {
  name: "classmates",
  data() {
    return {
      classmates: classmates.classmates
    };
  },
  methods: {
    buildImgUrl(url) {
      if (url) {
        return require("../assets/classmates/" + url + ".jpg");
      }
    }
  }
};
</script>

<style lang="scss">
$theme: #4267b2;

.classmates__wrapper {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}

.classmate {
  background: linear-gradient(to bottom right, #ca619c, #dbc084);
  border-radius: 10px;
  border: 1px solid $theme;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__cover {
    background-color: black;
    background-size: cover;
    min-height: 120px;
    position: relative;
  }

  &__details {
    justify-content: space-evenly;
  }

  &__name {
    color: #365899;
  }

  &__location,
  &__birthday {
    color: white;
  }

  &__profile {
    width: 70px;
    display: block;
    border-radius: 50px;
    border: 2px solid white;
    z-index: 1;
    position: absolute;
    bottom: -35px;
    right: 30px;
  }
}

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}
</style>
