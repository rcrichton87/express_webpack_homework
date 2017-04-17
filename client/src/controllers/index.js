var express = require('express');
var router = new express.Router();

router.use('/films', require('../models/films.js'));   

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = router; 