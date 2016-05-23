'use strict';

module.exports = {

	expiresToken: 1440,
    secret: 'gustavoisensee',
    database: {
    	userName: 'nodeapi',
		password: 'nodeapi123',
		server: 'db-stigeo-dev12',
		options: {
			instanceName: 'devweb2012',
			database: 'bd_nodeapi_teste',
			rowCollectionOnRequestCompletion: true
		}
    }

};