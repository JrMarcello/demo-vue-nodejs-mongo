// import { checkAuth } from '../../core/middlewares/auth'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  create: {
    username: {
      isString: true,
      errorMessage: 'Username inválido'
    },
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  },
  update: {
    username: {
      isString: true,
      errorMessage: 'Username inválido'
    },
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  },
  login: {
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  },
  validateID: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  // getAll: [validate(schemas.getAll)],
  // getById: [checkAuth, validate(schemas.validateID)],
  create: [validate(schemas.create)],
  // update: [checkAuth, validate(schemas.update)],
  // remove: [checkAuth, validate(schemas.validateID)],
  login: [validate(schemas.login)]
}
