'use strict';

module.exports = (router, jwt, config) => {

	router
		.post('/authenticate', (req, res, next) => {

			var user = {
				name: req.query.name,
				password: req.query.password,
				admin: true
			};
			
			
			if (user.name == 'gustavo' && user.password == '123') {
				var token = jwt.sign(user, config.secret, {
		        	expiresIn: config.expiresToken // expires in 24 hours
		        });
	        	
	        	return res.json({ success: true, token: token });    
        	} else {
	        	return res.json({ success: false, message: 'login or password invalid.' });
        	}

        });

}