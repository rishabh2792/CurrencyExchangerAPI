const mongoose = require('mongoose');

require('../models/currency');

// It is common database config file for connection and models require using promises.
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true}).then(() => {
    console.log('DB connected!!');
}, (err) => {
    console.log('Unable to connect DB', err);
});