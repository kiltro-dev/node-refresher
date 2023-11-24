// const { getAgePlugin, getUUIDPlugin } = require('../plugins/');
interface BuildMakePersonOptions {
  getUUIDPlugin: () => string;
  getAgePlugin: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}
export const buildMakePerson = ({
  getUUIDPlugin,
  getAgePlugin,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
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
