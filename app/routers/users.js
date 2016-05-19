'use strict';

module.exports = (router) => {

	router
		.get('/users', (req, res) => {
		    res.json('router users - get all');   
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