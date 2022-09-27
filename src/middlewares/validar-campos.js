const { validationResult } = require('express-validator')

const validateFields = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) { return next(new Error(errors)) }
  next()
}

module.exports = { validateFields }
