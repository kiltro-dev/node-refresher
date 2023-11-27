// const getAge = require('get-age');

export const getAgePlugin = (birthdate: string) => {
  // return getAge(birthdate);
  // console.log({ currentYear: new Date(birthdate).getFullYear() });
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
