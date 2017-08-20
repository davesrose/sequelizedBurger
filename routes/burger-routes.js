var express = require('express');
var router = express.Router();
// edit burger model to match sequelize
var Burger = require('../models/')["Burger"];
//get route -> index
router.get('/', function(req,res) {
	// send us to the next get function instead.
	res.redirect('/burgers');
});

// get route, edited to match sequelize
router.get('/burgers', function(req, res) {
	// replace old function with sequelize function
	Burger.findAll({})
	// use promise method to pass the burgers...
	.then(function(burger_data){
		console.log(burger_data);
		// into the main index, updating the page
		return res.render('index', {burger_data});
	})
});

// post route to create burgers
router.post('/burgers/create', function(req, res) {
	// edited burger create to add in a burger_name
	Burger.create({
		burger_name: req.body.burger_name,
		description: req.body.description
	})
	// pass the result of our call
	.then(function(newBurger){
		// log the result to our terminal/bash window
		console.log(newBurger);
		// redirect
		res.redirect('/');
	});
});

// put route to devour a burger
router.put('/burgers/update', function(req, res){
	// update one of the burgers
	Burger.findOne({where:{id: req.body.burger_id}})
		.then(function(theBurger){
			return theBurger.updateAttributes({
				devoured: true
			}).then(function(){
				return res.redirect('/');
			});
	});
});

module.exports = router;