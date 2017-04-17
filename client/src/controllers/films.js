var Films = require('../models/films');
var Film = require('../models/film');

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

module.exports = filmRouter;