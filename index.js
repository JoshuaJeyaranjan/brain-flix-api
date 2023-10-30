const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express is running')
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
});
