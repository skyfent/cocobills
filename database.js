const mysql = require('mysql2'); 
// const { Pool } = require('mysql2');
//Do not commit DB 22
//const connection = mysql.createConnection({
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coco',
        connectionLimit: 10
    });





module.exports = pool;   
