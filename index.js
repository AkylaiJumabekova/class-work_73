const express = require('express');// import express from 'express - то же самое на type.script

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Welcome');
})

app.get('/about', (req, res) => {
    return res.send('<h1>About</h1>');
})

app.get('/hello/:name', (req, res) => {
    return res.send(`Hello, ${req.params.name}`);
}) // мы можем часть роута сделать динамической как и в реакте, часть роута может начаться с : и тем самым все после hello и : будет попадать в этот роут, name может быть произвольным (мы можем написать userName и разницы никакой не будет, но нужно будет и при get и при send использовать одно название, так как это ключ )

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})