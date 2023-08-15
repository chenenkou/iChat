var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({code: 0, msg: 'hello chats', data: {}});
});

module.exports = router;
