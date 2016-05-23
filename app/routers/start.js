'use strict';

//const router = require('express').Router();
const router = require('express-promise-router')();
const jwt    = require('jsonwebtoken');
const config = require('../../config');

require('./authenticate')(router, jwt, config);

require('./main')(router, jwt, config);
require('./users')(router);

module.exports = router;