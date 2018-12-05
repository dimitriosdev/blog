const devConfig = {
  MONGO_URL: 'mongodb://localhost/blog-prod',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/blog-test',
};

const prodConfig = {
  MONGO_URL: 'mongodb://dim-dev:Kanenas0001!@ds024748.mlab.com:24748/blog-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 4000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
