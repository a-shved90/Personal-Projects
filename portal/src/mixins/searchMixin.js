export default {
  computed: {
    filterClassmates() {
      return this.classmates.filter(classmate => {
        return (
          classmate.name.toLowerCase().match(this.search.toLowerCase()) ||
          classmate.country.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
