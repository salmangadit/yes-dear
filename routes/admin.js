var express = require('express');
var router = express.Router();

var redis = require("redis"),
    client = redis.createClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin_login');
});

router.get('/home/:id', function(req, res, next) {
  client.get(req.params.id, function(err, reply){
    if (err){
      res.redirect("/admin/invalid");
    }
    
    res.render('admin', {accessToken: reply});
  });
});

router.get('/invalid', function(req, res, next) {
  res.render('error', { message: "No access allowed" } );
});

router.post('/login', function(req, res, next) {
  // Verify the FB Id of admins, and render accordingly
  var name = req.body.name;
  console.log("Verifying " + name);
  if (name == "Salman Gadit" || name == "Sana Razzak"){
    console.log("Valid!")
    
    client.set(req.body.id, req.body.accessToken, redis.print);
    
    // valid credentials
    res.send({render: "/admin/home"});
  } else {
    console.log("Invalid!")
    res.send({render: "/admin/invalid"});
  }
});



module.exports = router;
