'use strict';

module.exports = (router) => {

	const user    = require('../model/user');
	const factory = require('../factory/user');

	router
		.get('/users', (req, res, next) => {
			user.allSP().then((results) => {
			//user.all().then(function(results) {
				res.json(results.map(factory.get));
			}).fail((err) => {
				res.json(err);
			});
		})
		.post('/users', (req, res, next) => {
        	user.create(req.query).then((results) =>{
				res.json(results.map(factory.get));
			}).fail((err) => {
				res.json(err);
			});
        })
		.get('/users/:id', (req, res) => {
			user.getSP(req.params.id).then((results) => {
			//user.get(req.params.id).then((results) => {
				res.json(results.map(factory.get));
			}).fail((err) => {
				res.json(err);
			});
		})
		.put('/users/:id', (req, res, next) => {
   			user.update(req.params.id, req.query).then((results) =>{
				res.json(results.map(factory.get));
			}).fail((err) => {
				res.json(err);
			});	
        })
        .delete('/users/:id', (req, res, next) => {
        	user.delete(req.params.id).then((results) => {
				res.json(results.map(factory.get));
			}).fail((err) => {
				res.json(err);
			});
        });

}