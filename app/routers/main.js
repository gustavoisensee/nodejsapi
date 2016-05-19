module.exports = (router, jwt, config) => {

	router.use((req, res, next) => {
	    var token = req.body.token || req.query.token || req.headers['x-access-token'];

		if (token) {
			// check token and secret
			jwt.verify(token, config.secret, function(err, decoded) {      
				if (err) {
					//there is a problem
					return res.json({ success: false, message: 'Failed to authenticate token.' });    
				} else {
					//there is NOT problem
					req.decoded = decoded;    
					next();
				}
			});

		} else {
			// no token
			return res.status(403).json({ 
			    success: false, 
			    message: 'No token provided.' 
			});

		}

	    next();
	});

}