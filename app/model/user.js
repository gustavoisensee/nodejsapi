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

	create: (params) => {
		return base.tp.sql("insert into [User](name, password) values (@name, @password); select * from [User] where id = SCOPE_IDENTITY();")
			.parameter('name', base.TYPES.VarChar, params.name)
			.parameter('password', base.TYPES.VarChar, params.password)
			.execute();
	},

	update: (id, params) => {
		return base.tp.sql("update [User] set name = @name, [password] = @password where id = @id; select * from [User] where id = @id")
			.parameter('id', base.TYPES.Int, id)
			.parameter('name', base.TYPES.VarChar, params.name)
			.parameter('password', base.TYPES.VarChar, params.password)
			.execute();
	}

};