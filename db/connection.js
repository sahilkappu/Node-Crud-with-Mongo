const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MongoURI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongoose COnnected Successfully");
  } catch (e) {
    console.log(e);
  }
};
module.exports = connectDB();
