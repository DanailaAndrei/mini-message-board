const { Pool } = require("pg");

// module.exports = new Pool({
//   host: process.env.HOST, // or wherever the db is hosted
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.DBPORT // The default port
// });

// module.exports = new Pool({
//   connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DATABASE}`
// });

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

