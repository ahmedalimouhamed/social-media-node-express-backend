import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3
    },

    email: {
      type: String,
      required: true,
      unique: true
    }, 

    password: {
      type: String,
      required: true,
    },

    profilePecture: {
      type: String,
      default: ""
    },

    coverPicture: {
      type: String,
      default: ""
    },

    desc: {
      type: String
    },

    from: {
      type: String
    },

    relationship: {
      type: Number,
      enum: [1, 2, 3]
    },

    isAdmin: {
      type: Boolean,
      default: false
    },

    followers: {
      type: Array,
      default: []
    },

    followings: {
      type: Array,
      default: []
    }

  }

);

export default mongoose.model("User", userSchema);