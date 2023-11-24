// const getAge = require('get-age');

export const getAgePlugin = (birthdate: string) => {
  // return getAge(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
