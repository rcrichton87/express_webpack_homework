var Films = require('../models/films');

var films = new Films();
var express = require('express');
var filmRouter = new express.Router();

filmRouter.get('/', function(req, res){ 
  res.json(films);
})

filmRouter.get('/:id', function(req, res){ 
  res.json(films[req.params.id]);
})

module.exports = filmRouter;