var express = require('express');
var router = express.Router();

var Burger = require('../models/')["Burger"];

router.get('/', function(req,res) {
	res.redirect('/burgers');
});


router.get('/burgers', function(req, res) {
	Burger.findAll({}).then(function(burger_data){
		return res.render('index', {burger_data});
	})
});

router.post('/burgers/create', function(req, res) {
	Burger.create({
		burger_name: req.body.burger_name,
		description: req.body.description
	}).then(function(newBurger){
		res.redirect('/');
	});
});


router.put('/burgers/update', function(req, res){
	var burgerId = req.body.burger_id;
	Burger.update({devoured: true}, {where: {id: burgerId}}).then(function(data) {
		return res.redirect('/');
	})
});

module.exports = router;