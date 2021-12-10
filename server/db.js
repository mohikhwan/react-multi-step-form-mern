const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db-user', {
  useNewUrlParser: true,
  userCreateIndex: true,
  useUnifiedTopology: true
});