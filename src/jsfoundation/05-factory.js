// const { getAgePlugin, getUUIDPlugin } = require('../plugins/');

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson(obj);

// console.log(john);

module.exports = { buildMakePerson };
