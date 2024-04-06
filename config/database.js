const { createPool } = require("mysql2");
const pool = createPool ({
    port: process.env.DB_PORT, 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Successfully connected to the database!");
        connection.release(); // Release the connection back to the pool
    }
});
module.exports = pool