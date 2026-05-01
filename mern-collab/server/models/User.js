import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,       // 🔥 prevent duplicates
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6        // 🔐 basic security
    }
  },
  { timestamps: true }
);


// 🔥 Hide password when sending response
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", userSchema);