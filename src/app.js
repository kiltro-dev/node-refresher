// const { emailTemplate } = require('./jsfoundation/01-template');
// require('./jsfoundation/02-destructiring')
// console.log(emailTemplate);
// const { getUserById } = require('./jsfoundation/04-arrow');
// require('./jsfoundation/05-factory')
const { getAgePlugin, getUUIDPlugin } = require('./plugins');

const { buildMakePerson } = require('./jsfoundation/05-factory');

const makePerson = buildMakePerson({ getUUIDPlugin, getAgePlugin });

const obj = { name: 'John', birthdate: '1985-12-21' };

const john = makePerson(obj);

console.log(john);
