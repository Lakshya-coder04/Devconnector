const mongoose = require('mongoose');

//const config = require('config');
//USING DOTENV beacsue i don't wanna expose my MongoUri to other people
require('dotenv').config();

const db = process.env.MONGODB_URI;

// mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
