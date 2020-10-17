const express = require('express');
const loadData = require("./LoadData")
const cors= require('cors')
const app = express();
const port = 3001;

app.use(cors());


app.get('/budget',(req,res) => {
    res.json(loadData);
});

app.listen(port, () => {
    console.log(`Example app listening at:+ http://localhost:${port}`);
});