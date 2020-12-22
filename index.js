const https = require('https');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const cors =require('cors');
const port =  process.env.PORT || 2000;
//const sequelize = './db.js'
app.use(cors());
app.listen(port, () => console.log(`server started on port ${port}`));
app.get('/data', (req, res) => {
    return "working";
  });