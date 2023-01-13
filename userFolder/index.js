const express = require("express");

const router = express.Router();

router.use('/1', (req, res) => {
    // res.send(new Date());
    res.send('shehzad ap user folder me agye ho');
});



console.log('shehzad user folder agye hain ap')

module.exports = router