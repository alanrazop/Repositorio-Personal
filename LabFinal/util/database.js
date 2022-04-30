const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'labFinal',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

module.exports = pool.promise();