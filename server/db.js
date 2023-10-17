const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({ // create connection to database
    connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Render app 
    ssl: {
      rejectUnauthorized: false // don't check for SSL cert
    }
  });
  

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE
// });

module.exports = pool;