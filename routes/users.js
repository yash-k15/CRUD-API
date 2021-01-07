const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('user found');
})

module.exports = router;