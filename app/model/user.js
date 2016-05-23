'use strict';

const base = require('../model/base');

module.exports = {

	all: () => {
		return base.tp.sql("select id, name from [user]").execute();
	},

	get: (id) => {
		return base.tp.sql("select id, name from [user] where id = @id")
			.parameter('id', base.TYPES.Int, id)
			.execute();
	}
};