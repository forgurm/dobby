const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'daraeworld.iptime.org',
  user: 'forgurm',
  password: 'asdfqwer1!',
  database: 'tpsl',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
