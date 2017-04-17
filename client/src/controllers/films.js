var Films = require('../models/films');
var Film = require('../models/film');
var Review = require('../models/review');

var films = new Films();
var express = require('express');
var filmRouter = new express.Router();

filmRouter.get('/', function(req, res){ 
  res.json(films);
});

filmRouter.get('/:id', function(req, res){ 
  res.json(films[req.params.id]);
});

filmRouter.put('/:id', function(req, res){
  films[req.params.id].title = req.body.title;
  films[req.params.id].actors = req.body.actors; 
  res.json(films);
});

filmRouter.post('/', function(req, res){
  films.push(new Film(req.body) );
  res.json(films);
});

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
})

filmRouter.post('/:id/review', function(req, res){
  var review = new Review(req.body);
  films[req.params.id].addReview(review);
  res.json(films);
});

module.exports = filmRouter;