'use strict';

module.exports = class User {
	constructor(user) {
   	this.id = user.id || 0;
		this.name = user.name || '';
	} 
}