'use strict';

const base = require('../model/base');

const all = () => {
	return base.tp.sql("select id, name from [User]")
		.execute();
};

const post = (params) => {
	return base.tp.sql("insert into [User](name, password) values (@name, @password); select * from [User] where id = SCOPE_IDENTITY();")
		.parameter('name', base.TYPES.VarChar, params.name)
		.parameter('password', base.TYPES.VarChar, params.password)
		.execute();
};

const get = (id) => {
	return base.tp.sql("select id, name from [User] where id = @id")
		.parameter('id', base.TYPES.Int, id)
		.execute();
};

const put = (id, params) => {
	return base.tp.sql("update [User] set name = @name, [password] = @password where id = @id; select * from [User] where id = @id")
		.parameter('id', base.TYPES.Int, id)
		.parameter('name', base.TYPES.VarChar, params.name)
		.parameter('password', base.TYPES.VarChar, params.password)
		.execute();
};

const _delete = (id) => {
	return base.tp.sql("delete from [User] where id = @id")
		.parameter('id', base.TYPES.Int, id)
		.execute();
};

module.exports = {
	all, post, get, put,
	delete: _delete
};

/*
	//Examples of query using stored procedure.
	allSP: () => {
		return base.tp.sql("exec [dbo].[spr_Users]").execute();
	},

	getSP: (id) => {
		return base.tp.sql("exec spr_UserById @id")
			.parameter('id', base.TYPES.Int, id)
			.execute();
	}
*/