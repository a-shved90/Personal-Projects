export default {
  methods: {
    dateFormat(dateString) {
      let date = new Date(dateString);
      let day = ("0" + date.getDate()).slice(-2); // .padStart(2, 0);
      let month = date.toLocaleString("en-US", { month: "long" });
      let formattedDate = day + " " + month + " " + date.getFullYear();
      return formattedDate;
    }
  }
};
