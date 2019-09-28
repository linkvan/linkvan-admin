module.exports = function() {
	var users = require('./users.json')
	var facilities = require('./facilities.json')

	return {
		...users,
		...facilities
	}
}