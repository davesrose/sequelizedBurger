var express = require('express'); //require express package
var router = express.Router(); //set router variable for express routing

var Burger = require('../models/')["Burger"]; //assign Burger variable for Burger model

router.get('/', function(req,res) { //on root folder, redirect to /burgers directory
	res.redirect('/burgers');
});


router.get('/burgers', function(req, res) { //use get method in burgers directory
	Burger.findAll({}).then(function(burger_data){ //use findAll sequelize method to find all data in Burger model
		return res.render('index', {burger_data}); //render burger_data in index page
	})
});

router.post('/burgers/create', function(req, res) { //use post method in burgers/create directory
	Burger.create({ //use create sequelize method
		burger_name: req.body.burger_name, //include burger name
		description: req.body.description //include description (devoured is defaulted to false)
	}).then(function(newBurger){
		res.redirect('/'); //redirect to root (which redirects to /burgers)
	});
});


router.put('/burgers/update', function(req, res){ //use put method in burgers/update directory
	var burgerId = req.body.burger_id; //create burgerId from request's burger_id
	//use sequelize update method to set devoured to true, from the specified burgerId
	Burger.update({devoured: true}, {where: {id: burgerId}}).then(function(data) {
		return res.redirect('/'); //redirect to root (which redirects to /burgers)
	})
});

module.exports = router; //export our route calls