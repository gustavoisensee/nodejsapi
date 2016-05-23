'use strict';

module.exports = (router) => {

	const user = require('../model/user');

	router
		.get('/users', (req, res, next) => {
			user.all().then(function(results) {
				res.json(results);
			}).fail(function(err) {
				res.json(err);
			});
		})
		.post('/users', (req, res, next) => {
        	res.json('router users - post new');
        })
		.get('/users/:id', (req, res) => {
			user.get(req.params.id).then(function(results) {
				res.json(results);
			}).fail(function(err) {
				res.json(err);
			});
		})
		.put('/users/:id', (req, res, next) => {
        	res.json('router users - put ' + req.params.id);
        })
        .delete('/users/:id', (req, res, next) => {
        	res.json('router users - delete ' + req.params.id);
        });

}