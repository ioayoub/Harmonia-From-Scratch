const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

client.checkConnection = () => {

  client.getConnection()
    .then((co) => {
    console.info(`Using database ${process.env.DB_NAME}`)

      co.release()
  }).catch((e) => {
    console.warn(`ERROR : ${e.message}`)
  })
}

client.databaseName = process.env.DB_NAME;

module.exports = client;
