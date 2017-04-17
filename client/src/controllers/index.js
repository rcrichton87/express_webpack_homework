var express = require('express');
var router = new express.Router();

router.use('/api/films', require('./films'));   

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = router; 