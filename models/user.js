var services = require('../services');
var checkit = require('checkit');

var User = module.exports = services.bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: ['created_at', 'updated_at'],
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

// adding an instance method way 1
User.prototype.someMethod(a, b) {
  return a + b;
}