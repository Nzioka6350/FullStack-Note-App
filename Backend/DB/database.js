import mysql2 from mysql2;

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MAKUENIkenya2020',
    database: 'notes'
})