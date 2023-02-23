///////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// // SETTINGS
// app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2);

// // MIDDLEWARES
// app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // ROUTES
// app.use(require('./routes/index'));
// app.use('/api/movies', require('./routes/movies'));

// // STARTING THE SERVER

// app.listen(app.get('port'), () => {
//     console.log(`Server on port ${app.get('port')}`);
// });
//////////////////////////////////////////////////////////////////

// "dev": "nodemon src/index.js"

/////////////////////////////////////////////

// const express = require('express')






////////////////////////////////////////////////////////////////////

// import express from 'express'
// import IndexRoutes from './routes/index'

// const app = express()

// app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2);

// app.get('/', (req, res) => {
    
//     res.json({
//         "name": "Dennis",
//         "last_name": "Mugarte"
//     })
// })

// app.use(IndexRoutes)

// app.listen(app.get('port'))
// console.log('Server on port', app.get('port'))

///////////////////////

import app from "./app"
import './database'

app.listen(app.get('port'))
console.log('Server on port', app.get('port'))