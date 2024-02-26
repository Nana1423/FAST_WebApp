const mssql = require("mssql");

// Loading env variables
require("dotenv").config();

async function connectDB() {
  const sqlConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    server: process.env.SERVER,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  };

  const pool = await mssql.connect(sqlConfig)
  return pool
}

module.exports = connectDB;
