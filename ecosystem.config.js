module.exports = {
    apps: [
      {
        name: 'yunyu',
        exec_mode: 'cluster',
        instances: 1,
        script: './server.js',
        watch: true,
        args: '',
        env: {
          NODE_ENV: 'production',
          BASE_URL: 'https://api.cloudcat.show',
        },
        env_development: {
          NODE_ENV: 'development',
          BASE_URL: 'http://127.0.0.1:7001',
        },
        env_release: {
          NODE_ENV: 'release',
          BASE_URL: 'https://api.cloudcat.show',
        },
        env_production: {
          NODE_ENV: 'production',
          BASE_URL: 'https://api.cloudcat.show',
        }
      }
    ]
  }
  