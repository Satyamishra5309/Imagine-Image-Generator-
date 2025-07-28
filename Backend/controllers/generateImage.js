export const generateImage = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const response = await fetch("https://api.waifu.pics/sfw/waifu");
    const data = await response.json();

    res.status(200).json({ imageUrl: data.url });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({ message: "Failed to generate image" });
  }
};
