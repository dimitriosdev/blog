import mongoose from 'mongoose';

import constants from './constants';

// Remove the warning
mongoose.Promise = global.Promise;

// Connect the db with the url provider
try {
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => {
    console.log('MongoDB is running');
  })
  .on('error', (e) => {
    throw e;
  });
