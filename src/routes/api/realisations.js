const express = require('express');
const router = express.Router();

// Model realisation
const Realisation = require('../../models/Realisation');

// @route   GET api/realisations
// @desc    Get All Realisations
// @access  Public
router.get('/', (req, res) => {
    Realisation.find()
        .sort({ date: -1 })
        .then(realisations => res.json(realisations))
});

// @route   POST api/realisations
// @desc    POST a realisation
// @access  Public
router.post('/', (req, res) => {
    const newReal = new Realisation({
        title: req.body.title,
        content: req.body.content
    }); 

    newReal.save()
        .then(realisation => res.json(realisation))
})

module.exports = router;
