const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://URL/database');

app.use(bodyParser.json({ type: "*/*" }));
app.use(morgan("combined"));
router(app);


const port = 5000 || process.env.PORT;
const server = http.createServer(app);
server.listen(port);
console.log("Listening on port", port);
