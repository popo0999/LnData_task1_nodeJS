const mysql = require('mysql2')
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'company',
	waitForConnections: true,
	connectionLimit: 5,
	queueLimit: 0,
})

module.exports = pool.promise()
