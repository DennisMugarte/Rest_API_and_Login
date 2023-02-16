const express = require('express');
const app = express();
const morgan = require('morgan');

// SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.use(require('./routes/index'));

// STARTING THE SERVER

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});