var express = require('express');
var router = express.Router();

router.get('/', function (req, res) { res.send('메모 홈(home) 페이지'); }) 
router.get('/login', function (req, res) { res.send('login 페이지'); }) 

module.exports = router;
