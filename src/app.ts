import { buildLogger } from "./plugins/logger.plugin";
// const { emailTemplate } = require('./jsfoundation/01-template');
// require('./jsfoundation/02-destructiring')
// console.log(emailTemplate);
// const { getUserById } = require('./jsfoundation/04-arrow');
// require('./jsfoundation/05-factory')
//! factory function
// const { buildMakePerson } = require('./jsfoundation/05-factory');


// const { getAgePlugin, getUUIDPlugin } = require('./plugins');

// const getPokemonById = require('./jsfoundation/06-promises');

// getPokemonById(1, (pokemon) => console.log({ pokemon }));

// getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.error(err))
//   .finally(() => console.log('Finalmente'));

//! factory function
// const makePerson = buildMakePerson({ getUUIDPlugin, getAgePlugin });

// const obj = { name: 'John', birthdate: '1985-12-21' };

// const john = makePerson(obj);

// console.log(john);


const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Este es un error');
