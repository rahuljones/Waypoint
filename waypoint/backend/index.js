const { useId } = require('react');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

let map = {};

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get/:id', (req, res) => {
    const id = req.params.id; // Get the 'id' parameter from the URL
    res.send(map[id]);
});

app.post('/api/insert', (req, res) => {
    let obj = req.body.stepsData;
    const generatedId = useId(); // Using useId() here is not valid in a Node.js environment
    map[generatedId] = obj;
    const shareLink = "http://localhost:3000/response/" + generatedId; // Fix lastInsertId to generatedId
    console.log("In the backend:" + shareLink);
    res.send({ "link": shareLink });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
