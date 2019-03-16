const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var md5 = require('md5');

// @route   POST api/login
// @desc    POST login
// @access  Public
router.post('/', (req, res) => {
    const user = {
        id: 1,
        username: 'iamfayy',
        email: 'contact@faycalhammoudi.fr',
        hashed_password: '5f4dcc3b5aa765d61d8327deb882cf99'   
    }

    if(req.body.username !== 'undefined' && req.body.username == user.username && req.body.hashed_password == user.hashed_password) {
        jwt.sign({ user }, 'APQM1234', { expiresIn: '10m' }, (err, token) => {
            res.json({
                token
            });
        });
    } else {
        res.sendStatus(401);
    }
})

module.exports = router;