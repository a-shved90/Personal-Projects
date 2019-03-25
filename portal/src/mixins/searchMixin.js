export default {
  computed: {
    filteredByAll() {
      return this.getByCountry(
        this.getByName(this.classmates, this.searchName),
        this.searchCountry
      );
    },
    filteredByName() {
      return this.getByName(this.classmates, this.searchName);
    },
    filteredByCountry() {
      return this.getByCountry(this.classmates, this.searchCountry);
    }
  },
  methods: {
    getByName(array, name) {
      const search = name.trim();
      if (!search.length) return array;
      return array.filter(classmate => {
        return classmate.name
          .toLowerCase()
          .match(this.searchName.toLowerCase());
      });
    },
    getByCountry(array, country) {
      if (!country) return array;
      return array.filter(classmate => {
        return classmate.country
          .toLowerCase()
          .match(this.searchCountry.toLowerCase());
      });
    }
  }
};
