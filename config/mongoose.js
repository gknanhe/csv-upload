const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/csv_upload');

const db = mongoose.connection;

db.on('error', console.error.bind('error in connecting Database'));

db.once('open', function(){
    console.log("Connected to Database:: MongoDB");
    
})

module.exports = db;

