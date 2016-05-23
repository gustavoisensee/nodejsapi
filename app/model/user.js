'use strict';

const base = require('./base');
var list = [];

const execute = (conn) => {
	
	let req = new base.Request("select id, name from [user]", (err, rowCount, rows) => {
		if (err) {
			console.log('Request error: ' + err);
		} else {
			rows.forEach(function (columns) {
		        var row = {};
		        columns.forEach(function(column) {
		            row[column.metadata.colName] = column.value;
		        });
		        list.push(row)
		    });
		}
		conn.close();
	});

	conn.execSql(req);
}

const user = {

	all: (res) => {
		const conn = new base.Connection(base.Database);

		conn.on('connect', (err) => { 
			base.connected(err, () => { execute(conn) });
		});
		
		conn.on('end', () => {
			res.json(list);
		});
	},

	all2: () => {
		var tp = require('tedious-promises');
		var dbConfig = require('../../config.js').database;
		var TYPES = require('tedious').TYPES;
		tp.setConnectionConfig(dbConfig); // global scope

		var _ = require('lodash');
		tp.setDefaultColumnRenamer(_.camelCase); // global scope

		return tp.sql("select id, name from [user]").execute();

	}
};

module.exports = user;