'use strict';

const user = {
	get: (user) => {
		return {
			id: user.id,
			name: user.name
		};
	};
}

module.exports = user;