var services = require('../services');
var checkit = require('checkit');

var User = module.exports = services.bookshelf.Model.extend({
	tableName: 'users',
	idAttribute: 'userId',
	hasTimestamps: true,
	initialize: function(attrs, opts){
		this.on('saving', this.validateSave);
	},
	validateSave: function(){
		return new checkit({
			username: 'required'
		}).run(this.attributes);
	}
});

// adding a class method
User.someMethod = function(a, b) {
  return a + b;
};