const add = (req, res) => {

  const { email, password } = req.body;


  res.json({
    message : `Email : ${email}, Password: ${password}`
  })

}

module.exports = {add};