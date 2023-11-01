const express = require('express');
const router = express.Router();
const data = require('../data/data.json')

router.route('/').get((_req, res) => {
    const smallData = data.map(obj => ({
        id: obj.id,
        title: obj.title,
        channel: obj.channel,
    }))
    res.json(smallData)


});

router.post("/", (req, res) => {
    res.status(200).send(req.body);
    console.log(req.body)
    // create a new video, add that new video object to the data 
    const newVideo = {       
            
            "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
            ...req.body,
            "channel": "User Channel",
            "image": "https://i.imgur.com/l2Xfgpl.jpg",
            "views": "1,000,000",
            "likes": "100,000",
            "duration": "5:00",
            "video": "https://project-2-api.herokuapp.com/stream",
            "timestamp": 1926032763000,
            "comments": [
            ]
    }


});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    const video = data.find(video => video.id === videoId);
    
    if (!video) {
    return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
});

// router.post("/", (req, res) => {
//     console.log(req.body);
//     res.send('you did');
// //   try {
// //     const clientVideo = req.body;
// //     let newVideo = "Test Video";
// //     console.log(newVideo);
// //     console.log("test");
// //     res.send(clientVideo);
// //   } catch {
// //     console.error(error);
// //   }
// });

module.exports = router;