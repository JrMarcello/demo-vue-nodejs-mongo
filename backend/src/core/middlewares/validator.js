import { checkSchema, validationResult } from 'express-validator'
import constants from '../constants'

/**
 * Middiware to check if data is valid
 */
export default validation => {
  return [
    checkSchema(validation),
    (req, res, next) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        return next()
      }

      console.error(errors.mapped())
      return res.status(500).send(Object.assign(constants.validations.INVALID_REQUEST_DATA, { errors: errors.array() }))
    }
  ]
}
