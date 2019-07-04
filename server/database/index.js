//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://user:password1@ds347367.mlab.com:47367/heroku_lz6tq648' 

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
    },
    
    err => {
        /** handle initial connection error */ 
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
);


module.exports = mongoose.connection