<template>
  <div class="classmates">
    <div class="sort">
      <h1>List of my actual classmates from LV 1997-2005</h1>
      <span>Sort by:</span>
      <button @click="sortAlphabetical">Alphabetical</button>
      <button @click="sortDate">Birthday</button>
      <input type="text" v-model="search" placeholder="Search by name" />
    </div>
    <div class="classmates__wrapper">
      <div
        class="classmate"
        v-for="classmate in filterClassmates"
        :key="classmate.id"
      >
        <!-- classmate can be a user profile component, but since its exclusive to only this page, I decided to leave it -->
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
          <div class="classmate__social">
            <!-- social links can be a component -->
            <a
              class="social__url"
              :href="'https://www.facebook.com/' + classmate.id"
              target="_blank"
              rel="noopener"
            ></a>
            <template v-if="classmate.social">
              <a
                v-for="(item, key) in classmate.social"
                class="social__url"
                :class="key"
                :href="item"
                :title="key"
                target="_blank"
                rel="noopener"
              ></a>
            </template>
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

.classmates .sort {
  button {
    display: inline-block;
    padding: 10px;
    margin-left: 10px;
    border: none;
    background-color: $blue;
    color: white;

    &:hover {
      background-color: darken($blue, 10%);
    }
  }
  input {
    padding: 10px;
    margin-left: 10px;
    border: none;
    color: white;
    background-color: rgba($blue, 70%);

    &::placeholder {
      color: white;
    }

    &:hover {
      background-color: rgba($blue, 80%);
    }

    &:focus {
      background-color: rgba($blue, 90%);
    }
  }
}

.classmates__wrapper {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
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

  &__social {
    display: flex;
    flex: 1;

    .social__url {
      align-self: flex-end;
      width: 30px;
      height: 30px;
      background: orange;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}
</style>
