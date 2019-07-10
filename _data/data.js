const axios = require("axios");

module.exports = async () => {
  let url = "https://jsonplaceholder.typicode.com/users";

  return axios
    .get(url)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
