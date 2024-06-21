const {z} = require("zod");

const userRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s:])(\S){8,32}$/;

const userSchema = z.object({
  email: z.string().email({
    invalid_type_error: "Votre adresse mail n'est pas valide"
  }),
  firstname: z.string({
    invalid_type_error: "Le format de votre prénom n'est pas valide"
  }).min(2, {
    message: "Votre prénom doit contenir au minimum 2 caractères"
  }).max(150, {
    message: "Votre prénom doit contenir au maximum 150 caractères"
  }).regex(/[a-zA-Z]/, {
    message: "Votre prénom ne doit contenir que des lettres"
  }),
  lastname: z.string({
    invalid_type_error: "Le format de votre nom n'est pas valide"
  }).min(2, {
    message: "Votre nom doit contenir au minimum 2 caractères"
  }).max(150, {
    message: "Votre nom doit contenir au maximum 150 caractères"
  }),
  password: z.string().regex(userRegex, {
    message: "Votre doit contenir 1 chiffre, 1 lettre minuscule...."
  })
})

const validateUserSchema = (req, res, next) => {

  const {email, firstname, lastname, password} = req.body;

  // try {
  //
  //  userSchema.parse({email, firstname, lastname, password})
  //   next()
  //
  // } catch (e) {
  //   next(e)
  // }


  const validate = userSchema.safeParse({email, firstname, lastname, password})

  if(!validate.success) {

      const errors = validate.error.issues.reduce(
        (acc, issue) => {
          acc[issue.path[0]] = issue.message
          return acc;
        } , {}
      )

      return res.status(403).json(errors)

  }

  next()



}

module.exports = validateUserSchema;