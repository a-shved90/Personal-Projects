<template>
  <div class="classmates">
    <h1>{{ classmates.length - 1 }} classmates from LV 1997-2005</h1>
    <div class="sort">
      <h3>Sort by:</h3>
      <button @click="sortAlphabetical">Alphabetical</button>
      <button @click="sortDate">Birthday</button>
      <select v-model="searchCountry" class="classmates__dropdown">
        <option value="" disabled hidden>Search by country</option>
        <option value="">All</option>
        <option v-for="country in countryList()" :value="country">
          {{ country }}
        </option>
      </select>
      <input type="text" v-model="searchName" placeholder="Search by name" />
    </div>
    <div class="classmates__wrapper">
      <template v-for="classmate in filteredByAll">
        <ClassmateItem
          :classmate="classmate"
          :key="classmate.id"
        ></ClassmateItem>
      </template>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
import ClassmateItem from "../components/ClassmateItem";
import classmates from "../assets/classmates.json";
export default {
  name: "classmates",
  data() {
    return {
      classmates: classmates.classmates,
      searchName: "",
      searchCountry: ""
    };
  },
  components: { ClassmateItem },
  mixins: [searchMixin],
  methods: {
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
  }
};
</script>

<style lang="scss">
.classmates .sort {
  button {
    display: inline-block;
    padding: 10px;
    margin: 0 10px 10px 0;
    border: none;
    background-color: $blue;
    color: white;

    &:hover {
      background-color: darken($blue, 10%);
    }
  }
  input {
    padding: 10px;
    margin: 0 10px 0 0;
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
    margin: 0 10px 10px 0;
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
</style>
