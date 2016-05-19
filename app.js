const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const port       = (process.env.PORT || 3000);
const router     = require('./app/routers/start');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev')); // use morgan to log requests to the console

app.use('/api', router);
app.listen(port);