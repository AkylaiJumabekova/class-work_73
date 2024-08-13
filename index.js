const express = require('express');// import express from 'express - то же самое на type.script

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Welcome');
})

app.get('/about', (req, res) => {
    return res.send('<h1>About</h1>');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})