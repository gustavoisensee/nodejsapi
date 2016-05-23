'use strict';

const base = require('../model/base');

module.exports = {

	all: () => {
		return base.tp.sql("select id, name from [User]").execute();
	},

	allSP: () => {
		return base.tp.sql("exec [dbo].[spr_Users]").execute();
	},

	get: (id) => {
		return base.tp.sql("select id, name from [User] where id = @id")
			.parameter('id', base.TYPES.Int, id)
			.execute();
	},

	getSP: (id) => {
		return base.tp.sql("exec spr_UserById @id")
			.parameter('id', base.TYPES.Int, id)
			.execute();
	},

	delete: (id) => {
		return base.tp.sql("delete from [User] where id = @id")
			.parameter('id', base.TYPES.Int, id)
			.execute();
	},
};