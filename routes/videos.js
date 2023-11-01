const express = require('express');
const router = express.Router();
const data = require('../data/data.json')

router.get('/', (_req, res) => {
    const smallData = data.map(obj => ({
        id: obj.id,
        title: obj.title,
        channel: obj.channel,
    }))
    res.json(smallData)
});

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    const video = data.find(video => video.id === videoId);
    if (!video) {
    return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
});

module.exports = router;