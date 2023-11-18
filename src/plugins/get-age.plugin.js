const getAge = require('get-age');

const getAgePlugin = (birthdate) => {
  if (!birthdate) return new Error('birthdate is required');
  return getAge(birthdate);
};

module.exports = {
  getAgePlugin,
};
