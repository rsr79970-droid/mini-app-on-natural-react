import { model, Schema } from "mongoose";

const nameSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: nameSchema,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("User", userSchema);
