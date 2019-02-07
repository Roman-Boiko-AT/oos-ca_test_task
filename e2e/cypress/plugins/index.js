const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  const envSpecificConfigFileName = config.env.CONFIG_FILE || 'local';

  options.browserifyOptions.plugin.unshift(['tsify']);

  on('file:preprocessor', cucumber(options));
  return getAndMergeConfigurationsByFile(
    'general',
    envSpecificConfigFileName,
    config
  );
};

function getAndMergeConfigurationsByFile(
  initialConfigFile,
  specificConfigFile,
  basicConfigs
) {
  const pathToInitialConfigFile = path.resolve(
    '../e2e/',
    'config',
    `${initialConfigFile}.json`
  );
  const pathToSpecificConfigFile = path.resolve(
    '../e2e/',
    'config',
    `${specificConfigFile}.json`
  );
  return fs.readJson(pathToSpecificConfigFile).then(specificConfig =>
    fs.readJson(pathToInitialConfigFile).then(generalConfig => {
      const env = generalConfig.env;
      for (var prop in specificConfig) {
        generalConfig[prop] = specificConfig[prop];
      }
      generalConfig.env = env;
      for (var prop in specificConfig.env) {
        generalConfig.env[prop] = specificConfig.env[prop];
      }
      for (var prop in basicConfigs.env) {
        if (prop in generalConfig) {
          generalConfig[prop] = basicConfigs.env[prop];
        } else {
          generalConfig.env[prop] = basicConfigs.env[prop];
        }
      }
      return generalConfig;
    })
  );
}
