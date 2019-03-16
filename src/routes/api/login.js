const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var md5 = require('md5');

<<<<<<< HEAD:routes/api/login.js
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

=======
>>>>>>> f2d47ea03303fed2e9f6943a72a2b4c3face8672:src/routes/api/login.js
module.exports = router;