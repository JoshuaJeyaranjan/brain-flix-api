const express = require("express");
const router = express.Router();
const data = require("../data/data.json");
const fs = require("fs");

let readData = () => {
  const realReadData = JSON.parse(fs.readFileSync("./data/data.json"));
  return realReadData;
};

router.route("/").get((_req, res) => {
  const smallData = data.map((obj) => ({
    id: obj.id,
    title: obj.title,
    channel: obj.channel,
    image: obj.image,
  }));
  res.json(smallData);
});

router.post("/upload", (req, res) => {
  res.status(200).send(req.body);
  console.log(req.body);
  const newVideo = {
    id: "400",
    ...req.body,
    channel: "User Channel",
    image: "",
    views: "1,000,000",
    likes: "100,000",
    duration: "5:00",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };
  let allData = readData();
  allData.push(newVideo);
  let a = JSON.stringify(allData);
  fs.writeFileSync("./data/data.json", a);
});

router.get("/:id", (req, res) => {
  const videoId = req.params.id;
  const video = data.find((video) => video.id === videoId);

  if (!video) {
    return res.status(404).json({ error: "Video not found" });
  }
  res.json(video);
});

module.exports = router;
