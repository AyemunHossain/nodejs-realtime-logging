module.exports = {
  apps: [
    {
      name: 'lms server',
      script: 'server.js', // Replace with your entry point file
      env_test: {
        NODE_ENV: 'test',
        ALLOW_CONFIG_MUTATIONS: 'true',
        // Add other environment variables here
      },
      env_production: {
        NODE_ENV: 'production',
        ALLOW_CONFIG_MUTATIONS: 'true',
        // Add other environment variables here
      },
      env_development: {
        NODE_ENV: 'development',
        ALLOW_CONFIG_MUTATIONS: 'true',
        // Add other environment variables here
      }
    }
  ]
};