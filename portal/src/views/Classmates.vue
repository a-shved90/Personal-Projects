<template>
  <div class="classmates">
    <h1>facebook sdk things</h1>
    <button @click="sortAlphabetical">alphabetical</button>
    <button @click="sortDate">birthday</button>
    <input type="text" v-model="search" placeholder="search by name" />
    <div class="classmates__wrapper">
      <div
        class="classmate"
        v-for="classmate in filterClassmates"
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
      classmates: classmates.classmates,
      search: ""
    };
  },
  methods: {
    buildImgUrl(url) {
      if (url) {
        return require("../assets/classmates/" + url + ".jpg");
      }
    },
    sortAlphabetical() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return this.classmates.sort(compare);
    },
    sortDate() {
      this.classmates.sort((a, b) => {
        return new Date(a.birthday) - new Date(b.birthday);
      });
      return this.classmates;
    }
  },
  computed: {
    filterClassmates() {
      return this.classmates.filter(classmate => {
        return classmate.name.toLowerCase().match(this.search.toLowerCase());
      });
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
  justify-content: flex-start;
  flex-direction: column;

  &__cover {
    background-color: black;
    background-size: cover;
    min-height: 120px;
    position: relative;
  }

  &__details {
    justify-content: space-evenly;
    padding: 35px 10px 10px;
  }

  &__name {
    color: #365899;
    margin: 0 0 10px;
  }

  &__location,
  &__birthday {
    color: white;
    margin: 0;
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
