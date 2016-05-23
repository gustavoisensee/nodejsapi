'use strict';

const base = require('../model/base');

module.exports = {

	check: (name, password) => {
		return base.tp.sql("select id, name from [user] where name = @name and password = @password")
			.parameter('name', base.TYPES.VarChar, name)
			.parameter('password', base.TYPES.VarChar, password)
			.execute();
	}
};