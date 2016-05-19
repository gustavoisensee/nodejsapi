var router = require('express').Router();

require('./main')(router);
require('./users')(router);

module.exports = router;