// SHIVANSH THATAI 
// 301315023 
// Oct 3, 2023 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// route for about
// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'About' });
// });

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
// Route for the Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Project' });
});


// Route for the Services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Route for the Contact Me page
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Me' });
});
module.exports = router;
