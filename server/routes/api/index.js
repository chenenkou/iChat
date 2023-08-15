const express = require('express');
const router = express.Router();

router.use('/chats', require('./chats'));

module.exports = router;
