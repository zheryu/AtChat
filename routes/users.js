var express = require('express');
var router = express.Router();

var User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {user: null});
});

router.get('/testSignUp', function(req, res, next){
	var signUpUser = new User({
	      username: 'jagger156',
	      password: 'asdf', 
	      firstName: 'john', 
	      lastName: 'smith', 
	      email: 'john_smith@gmail.com'
  	});
  
  	signUpUser.save().then(function (user) {
		console.log(user);
  	}).catch(function(err) {
		console.log(err);
  	});
	return res.render('index', {user: null});
});

var signupGetPrivate = function(req,res) {
	if (req.isAuthenticated()) {
  		console.log('get to signup authenticated');
  		return res.redirect('/');
	} 
	return renderViewPrivate(req, res, '/signup/signup.ejs', {errorMessage: null, user: null});
};

var signupPostPassportPrivate = function(req, res) {
	// factObject.keys()  = [err, user]
	var signupCallBack = function (err, user, info) {
	  	var templPath = '/signup/signup.ejs'
	  	if (err) {
	   		return renderViewPrivate(req, res, templPath, {user: user, errorMessage: err.message});
	  	}
	  	if (!user) {
	    	return renderViewPrivate(req, res, templPath, {user: user, errorMessage: info.message});
	  	}
	  	req.logIn(user, function(err) {
	    	if (err) {
	    		return renderViewPrivate(req, res, templPath, {user: user, errorMessage: err.message});
	    	} else {
	    		return res.redirect('/');
	    	}
	  	});
	};
	return passport.authenticate('local-signup', {failureRedirect: '/', failureFlash: true}, signupCallBack)(req, res);
}; 

var loginPostPassportPrivate = function(req, res) { 
	var loginCallBack = function (err, user, info) {
  		console.log('login callback called');
  		var templPath = '/home/index.ejs';

  		if (err) {
    		return renderViewPrivate(req, res, templPath, {user: user, errorMessage: err.message});
  		}

  		if (!user) {
    		return renderViewPrivate(req, res, templPath, {user: user, errorMessage: info.message});
  		}
  		return req.logIn(user, function(err) {
    		if(err) {
      			return renderViewPrivate(req, res, templPath, {user: user, errorMessage: err.message});
    		} else {
      			console.log(user.get('firstName'));
      			res.redirect('/');
    		}
  		});
  
	};
	return passport.authenticate('local-login', {failureRedirect: '/', failureFlash: true}, loginCallBack)(req, res);
};

var renderViewPrivate = function(req, res, templatePath, ejsDict) {
	var viewsAbsPath = path.join(__dirname, '../../public/views');
	return res.render(path.join(viewsAbsPath, templatePath), ejsDict);
};

module.exports = router;
