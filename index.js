require("dotenv").config();

const port = process.env.APP_PORT;

const app = require("./app/config")


const client = require("./database/client")

client.checkConnection()

app.listen(port, (e) => {
  if(e) console.error(e)
  console.log(`Server is running on port 8000`)
})