'use strict';

module.exports = (router) => {

	const user = require('../model/user');

	router
		.get('/users', (req, res, next) => {
			//user.all(res);

			user.all2().then(function(results) {
				console.log(results);
				res.json(results);
			    // do something with the results
			}).fail(function(err) {
				// do something with the failure
			});
		})

		.post('/users', (req, res, next) => {
        	res.json('router users - post new');
        })
		.get('/users/:id', (req, res) => {
			res.json('router users - get ' + req.params.id);
		})
		.put('/users/:id', (req, res, next) => {
        	res.json('router users - put ' + req.params.id);
        })
        .delete('/users/:id', (req, res, next) => {
        	res.json('router users - delete ' + req.params.id);
        });

}