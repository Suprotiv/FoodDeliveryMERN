const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://Raven:Suprotiv1!@cluster0.zjlfic9.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected");
};

module.exports = mongoDB;
