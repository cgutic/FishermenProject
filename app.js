'use strict';

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').load();

var app = express();

const authenticatedRoutes = require('./src/routes/routes');

// SON EQUIVALENTES: app.use('/', authenticatedRoutes);
app.use(authenticatedRoutes);

// view engine setup and public static directory
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use( express.static( path.join(__dirname, 'src/css') ));
app.use( express.static( path.join(__dirname, 'src/js') ));
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
    console.log('Servidor inicializado en localhost ', process.env.PORT, ' correctamente');
});

app.get('*', (req, res) => {
    res.redirect('error');
});

module.exports = app;