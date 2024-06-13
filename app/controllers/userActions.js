const tables = require("../../database/tables")



const add = async (req, res) => {

  const { email, password } = req.body;

  try {

    const insertId = await tables.user.create({ email, password})

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