'use strict';

const express    = require('express');
const spdy       = require('spdy');
const app        = express();
const bodyParser = require('body-parser');
const fs         = require('fs');
//const morgan     = require('morgan');
const port       = (process.env.PORT || 3000);
const router     = require('./server/routes/start');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use morgan to log requests to the console
//app.use(morgan('dev')); 

// Define routers
app.use(router);

// SSL options
var options = {
    key: fs.readFileSync('./server/security/localhost.key'),
    cert: fs.readFileSync('./server/security/localhost.cert')
};

spdy.createServer(options, app).listen(port);
