const { v4: uuidv4 } = require('uuid');

const getUUIDPlugin = () => uuidv4();

module.exports = {
  getUUIDPlugin,
};
