const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios(url);
    return data;
  },
  // get: async (url) => {
  //   const response = await fetch(url);
  //   return await response.json();
  // },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
  httpClientPlugin,
};
