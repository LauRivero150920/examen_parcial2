const mysql = require('mysql2');

const BD = "DEV";

let host = '';
let user = '';
let database = '';
let password = '';

//* Fase de development (desarrollo)
if(BD ===  "DEV"){
    host = 'localhost';
    user = 'root';
    database = 'zombies';
    password = '';
}

const pool = mysql.createPool({
    host: host,
    user: user,
    database: database,
    password: password,
});

module.exports = pool.promise();