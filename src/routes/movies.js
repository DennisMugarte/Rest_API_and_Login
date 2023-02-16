const { Router } = require('express');
const router = Router();

const movies = require('../example.json');

router.get('/', (req, res) => {
    res.json(movies);
    // res.send({ "title": "Hello World" });
});

module.exports = router;
