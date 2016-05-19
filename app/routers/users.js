module.exports = function (router) {

	router
		.get('/users', function(req, res) {
		    res.json('router users - get all');   
		})
		.post('/users',function(req, res, next) {
        	res.json('router users - post new');
        })
		.get('/users/:id', function(req, res) {
			res.json('router users - get ' + req.params.id);
		})
		.put('/users/:id', function(req, res, next) {
        	res.json('router users - put ' + req.params.id);
        })
        .delete('/users/:id', function(req, res, next) {
        	res.json('router users - delete ' + req.params.id);
        });

}