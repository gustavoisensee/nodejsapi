'use strict';

const Database   = require('../../config').database;
const Connection = require('tedious').Connection;
const Request    = require('tedious').Request;
const TYPES      = require('tedious').TYPES;

const connected = (err, callback) => {
	if (err) {
		console.log('Error connecting to the database: ' + err)	
	} else {
		callback();
	}
};

const end = () => {
	console.log('Connection closed');
};

module.exports = {
	Database: Database,
	Connection: Connection,
	Request: Request,
	connected: connected,
	end: end
}