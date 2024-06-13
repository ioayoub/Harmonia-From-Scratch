require("dotenv").config()
const mysql = require("mysql2/promise")

const fs = require("node:fs")
const path = require("node:path")


const schema = path.join(__dirname, "..", "database", "schema.sql")

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

const migrate = async () => {

  const database = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
  })

  try {

    const sql = fs.readFileSync(schema, "utf-8")

    await database.query(`DROP DATABASE IF EXISTS ${DB_NAME}`)

    await database.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)

    await database.query(`USE ${DB_NAME}`)

    await database.query(sql)

    console.log(`Database ${DB_NAME} is created`)

    database.end()
  } catch (e) {
    console.error(e.message)
  }
}

migrate();