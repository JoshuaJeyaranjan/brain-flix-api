const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const videoRoutes = require("./routes/videos");

app.get("/", (_req, res) => {
  res.send("express is running");
});
app.use(express.json());
app.use("/videos", videoRoutes);
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});
