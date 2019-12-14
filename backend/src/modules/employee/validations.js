import { checkAuth } from '../../core/middlewares/auth'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  create: {},
  update: {},
  validateID: {
    id: {
      isAlphanumeric: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getAll: [checkAuth, validate(schemas.getAll)],
  getById: [checkAuth, validate(schemas.validateID)],
  create: [checkAuth, validate(schemas.create)],
  update: [checkAuth, validate(schemas.update)],
  remove: [checkAuth, validate(schemas.validateID)]
}
