'use strict';

module.exports = (router) => {

	const user = require('../model/user');

	router
		.get('/users', (req, res, next) => {
			user.allSP().then((results) =>{
			//user.all().then(function(results) {
				res.json(results);
			}).fail((err) => {
				res.json(err);
			});
		})
		.post('/users', (req, res, next) => {
        	res.json('router users - post new');
        })
		.get('/users/:id', (req, res) => {
			user.getSP(req.params.id).then((results) => {
			//user.get(req.params.id).then((results) => {
				res.json(results);
			}).fail((err) => {
				res.json(err);
			});
		})
		.put('/users/:id', (req, res, next) => {
        	res.json('router users - put ' + req.params.id);
        })
        .delete('/users/:id', (req, res, next) => {
        	user.delete(req.params.id).then((results) => {
				res.json(results);
			}).fail((err) => {
				res.json(err);
			});
        });

}