const path = require('path');
const webpack = require('webpack');
// const {alias, configPaths} = require('react-app-rewire-alias')

module.exports = {

  webpack: function(config, env) {
    console.log('process.env.SW_ENV', process.env.SW_ENV);
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src/'),
    }
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
            "process.env.SW_ENV": JSON.stringify(process.env.SW_ENV)
        })
    ]
    return config;
  },

  jest: function(config) {
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = [];
    }
    if (!process.env.RUN_COMPONENT_TESTS) {
      config.testPathIgnorePatterns.push('<rootDir>/src/components/**/*.test.js');
    }
    if (!process.env.RUN_REDUCER_TESTS) {
      config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    }
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },

  paths: function(paths, env) {
    return paths;
  },
}
