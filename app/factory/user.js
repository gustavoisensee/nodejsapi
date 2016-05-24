'use strict';

module.exports = {
	get: (user) => {
		return {
			id: user.id,
			name: user.name
		};
	}
}