"use strict";

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const bodyParser = require('body-parser');

// template
nunjucks.configure('./', {
  autoescape: true,
  express: app
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./router')(app);

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
