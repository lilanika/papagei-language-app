
const { Schema, model } = require("mongoose");


const cloudinarySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
);
