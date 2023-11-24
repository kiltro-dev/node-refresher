// const { getAgePlugin, getUUIDPlugin } = require('../plugins/');

const buildMakePerson = ({ getUUIDPlugin, getAgePlugin }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUIDPlugin(),
      name,
      birthdate,
      age: getAgePlugin(birthdate),
    };
  };
};

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson(obj);

// console.log(john);

module.exports = { buildMakePerson };
