const tables = require("../../database/tables")



const add = async (req, res) => {

  console.log(req.body)

  const { email, firstname, lastname, password } = req.body;

  try {

    const insertId = await tables.user.create({ email, firstname, lastname, password})

    res.json({
      message: "User created",
      insertId : insertId
    })

  } catch(e) {
    console.error(e)

    res.json({
      error : e.message
    })
  }




}

module.exports = {add};