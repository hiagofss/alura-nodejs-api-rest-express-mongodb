import mongoose, { Schema } from "mongoose";

class Author {
  static schema = new Schema(
    {
      id: { type: String },
      name: { type: String, required: true },
      nationality: { type: String },
    },
    {
      versionKey: false,
    }
  );
}

export default mongoose.model("authors", Author.schema);
