var express    = require('express'),
	app        = express(),
	bodyParser = require('body-parser'),
	port       = (process.env.PORT || 3000),
	router     = require('./app/routers/start');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port);