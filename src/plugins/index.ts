const { getAgePlugin } = require('./get-age.plugin');
const { getUUIDPlugin } = require('./get-id.plugin');
const { httpClientPlugin } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = { getAgePlugin, getUUIDPlugin, httpClientPlugin, buildLogger };
