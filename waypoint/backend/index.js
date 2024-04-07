const { useId } = require('react');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

let name = "Building";
let adjMatrix = [[]];
let namesArr = [];

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getMatrix', (req, res) => {
    //const id = req.params.id; // Get the 'id' parameter from the URL
    res.send(adjMatrix);
});

app.get('/api/getnames', (req, res) => {
    //const id = req.params.id; // Get the 'id' parameter from the URL
    res.send(namesArr);
});
app.get('/api/getTitle', (req, res) => {
    //const id = req.params.id; // Get the 'id' parameter from the URL
    res.send(name);
});
app.post('/api/insertTitle', (req, res) => {
    let tempname = req.body.NameData;
    name = tempname;
    console.log(name);
    
});
app.post('/api/insertMatrix', (req, res) => {
    let adjacencyMatrix = req.body.stepsData;
    adjMatrix = adjacencyMatrix;
    
});
app.post('/api/insertNames', (req, res) => {
    let namesArray = req.body.namesData;
    namesArr = namesArray;
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
