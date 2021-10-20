const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


//! rutas
const rutasZombies = require('./routes/new_zombies-routes');
const rutasEstados = require('./routes/zombie_state-routes');

const path = require('path');

//! View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

//! rutas
app.use('/zombies', rutasZombies);
app.use('/states', rutasEstados);

app.use((request, response, next) => {
    response.status(404).render('404');
});

app.listen(3000);