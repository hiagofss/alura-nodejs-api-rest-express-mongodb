import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI + "/" + process.env.MONGO_COLLECTION);

let database = mongoose.connection;

export default database;
