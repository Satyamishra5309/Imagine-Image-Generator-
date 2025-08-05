import express from 'express';
import dotenv from 'dotenv';
import DBconnect from './DB/Connection.js';
import cors from 'cors';
import PostRoutes from "./Routes/Posts.js"
import exploreRoutes from "./Routes/explore.js"
import generateImageRoutes from './Routes/generateImage.js';




dotenv.config();
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
const port = process.env.PORT || 5000;
DBconnect();
 
app.use("/api/v1/posts", PostRoutes);
app.use("/api/v1/explore", exploreRoutes);
app.use("/api/v1", generateImageRoutes);

app.get("/", (req, res) => {
  res.send("✅ PostRoutes working!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
