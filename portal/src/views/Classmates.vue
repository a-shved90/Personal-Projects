<template>
  <div class="classmates">
    <div class="container">
      <div class="col__2-3">
        <h1>{{ classmates.length - 1 }} classmates from LV 1997-2005</h1>
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
                  'background-image: url(' + coverImgUrl(classmate.name) + ');'
                "
              >
                <img
                  class="classmate__profile"
                  :src="profileImgUrl(classmate.name)"
                />
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
        </div>
      </div>
      <div class="col__1-3">
        <div class="sort">
          <h3>Sort by:</h3>
          <button @click="sortAlphabetical">Alphabetical</button>
          <button @click="sortDate">Birthday</button>
          <select v-model="search" class="classmates__dropdown">
            <option v-for="country in countryList()" :value="country">{{
              country
            }}</option>
          </select>
          <input type="text" v-model="search" placeholder="Search by name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
import dateFormatMixin from "../mixins/dateFormatMixin";
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
    },
    countryList() {
      let allCountries = Array.from(
        this.classmates,
        classmate => classmate.country
      );
      let uniqueCountries = [...new Set(allCountries)];
      return uniqueCountries;
    }
  },
  mixins: [searchMixin, dateFormatMixin]
};
</script>

<style lang="scss">
$theme: #4267b2;

$color: white;

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
  select {
    width: 200px;
    padding: 9px;
    margin-left: 10px;
    border: none;
    outline: none;
    background: $blue;
    color: white;
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

a {
  color: $theme;

  &:hover {
    color: lighten($theme, 15%);
  }
}
</style>
