'use strict';

module.exports = (router, jwt, config) => {

	router
		.post('/authenticate', (req, res, next) => {

			var user = {
				name: req.query.name,
				password: req.query.password,
				admin: true
			},
				message = {
					success: 'login successful.',
					fail: 'login or password invalid. '
				};
			
			const login = require('../model/login');

			login
				.check(user.name, user.password)
				.then((results) => {
					if (results.length > 0) {
						var token = jwt.sign(user, config.secret, {
				        	expiresIn: config.expiresToken // expires in 24 hours
				        });
			        	
			        	return res.json({ success: true, token: token });    

					} else {
						return res.json({ success: false, message: message.fail });
					}
				})
				.fail((err) => {
					return res.json({ success: false, message: message.fail + err });
				});

    });

}