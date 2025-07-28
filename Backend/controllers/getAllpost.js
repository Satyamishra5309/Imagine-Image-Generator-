import Post from "../models/postSchema.js"

export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();

        if (posts.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error occurred", error: error.message });
    }
};
