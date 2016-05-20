'use strict';

const base = require('./base');
var list = [];

const execute = (conn) => {
	
	let req = new base.Request("select id, name from [user]", (err, rowCount) => {
		console.log(rowCount);
		if (err) {
			console.log('Request error: ' + err);
		}
		conn.close();
	});

	req.on('row', (columns) => {
		list.push({id: 0, name: ''});
		columns.forEach((column) => {
			list[list.length-1][column.metadata.colName] = column.value;
		});
	});

req.on('done', function(rowCount, more) {
	return list;
});

	conn.execSql(req);
}

const user = {

	findUsers: (res) => {
		const conn = new base.Connection(base.Database);

		conn.on('connect', (err) => { 
			base.connected(err, () => { execute(conn) });
		});
		conn.on('end', () => { 
			console.log(list)
			return list;
		});
	},

	findUsers2: () => {
		var list = []
		var tp = require('tedious-promises');
		var dbConfig = require('../../config').database;
		var TYPES = require('tedious').TYPES;
		tp.setConnectionConfig(dbConfig); // global scope 

		var _ = require('lodash');
		tp.setDefaultColumnRenamer(_.camelCase); // global scope 

		return tp.sql("select id, name from [dbo].[User]").execute();
	}

};

module.exports = user;