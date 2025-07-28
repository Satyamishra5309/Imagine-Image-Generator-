import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

// ✅ Default export
export default Post;
