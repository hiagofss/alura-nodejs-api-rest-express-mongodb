import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

let database = mongoose.connection;

export default database;
