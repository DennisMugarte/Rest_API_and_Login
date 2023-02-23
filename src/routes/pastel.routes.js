// const { Router } = require('express');
// const router = Router();


// router.get('/test', (req, res) => {
//     const data = {
//         "name": "Dennis",
//         "last_name": "Mugarte"
//     };
//     res.json(data);
//     // res.send({ "title": "Hello World" });
// });

// module.exports = router;

/////////////////////////////////////////////////////////7

import { Router } from "express"
const router = Router()

router.get('/test', (req, res) => {
    // const data = {
    //     "name": "Dennis",
    //     "last_name": "Mugarte"
    // };
    // res.json(data);
    res.send({ "title": "Hello World" })
})

module.exports = router;

