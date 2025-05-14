var configValues = require("./config");

const username = 'nya3mk'
const password = 'N...k2..9'

module.exports = {
	getDbConnectionString: function () {
		return `mongodb://${username}:${password}@cluster0.uvef8au.mongodb.net/test`;
	}
};
