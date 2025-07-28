// router: /api/v1/postImage
import Post from "../models/postSchema.js"

export const postImage = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const createdPost = await Post.create({
      title,
      image,
      description,
    });

    res.status(200).json({ message: "Successfully posted", post: createdPost });
  } catch (error) {
    console.error("Error posting image:", error.message);
    res.status(500).json({ message: "Problem in posting image", error: error.message });
  }
};
