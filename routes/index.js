var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) { 
  res.render('main/index', { title: 'Steven Jin'} );
});

module.exports = router;
