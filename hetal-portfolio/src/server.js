const express = require("express");
const http = require("http");
const cors = require("cors");
const fs = require("fs");
const data = require("./apis/data.json");
const app = express();

app.use(cors());

//Port number 
const port = 3001;

app.get('/api', (req, res) => {
    console.log(data);
    existingData = JSON.stringify(data);
    res.end(existingData);
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})