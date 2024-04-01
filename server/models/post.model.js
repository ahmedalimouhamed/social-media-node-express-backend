import mongoose from "mongoose";
import {Schema} from "mongoose";

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },

    desc: {
      type: String
    },

    likes: {
      type: Array,
      default: []
    }

  },

  {
    timestamps: true
  }

);

export default mongoose.model("Post", PostSchema);