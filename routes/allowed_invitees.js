var express = require('express');
var router = express.Router();

var db = require('../model/allowed_invitees.js');

router.post('/', function(req, res, next) {
  db.create({
    fb_name : req.body.fb_name
  }, function(err, result){
    res.send(result);
  });
});

router.get('/', function(req, res, next) {
  db.getAll(function(err, result){
    res.send(result);
  });
});

router.post('/delete', function(req, res, next) {
  db.remove({
    fb_name : req.body.fb_name
  }, function(err, result){
    res.send(result);
  });
});

module.exports = router;