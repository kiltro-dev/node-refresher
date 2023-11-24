import axios from 'axios';

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios(url);
    return data;
  },
  // get: async (url) => {
  //   const response = await fetch(url);
  //   return await response.json();
  // },

  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {},
};
