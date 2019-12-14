import * as repository from './repository'
import constants from '../../core/constants'

/**
 * @api {get} /employee Get all
 * @apiName GetEmployees
 * @apiGroup Employee
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [{
 *          "_id": "5df4f4d9938a3200cdbfe960",
 *          "registration": "123456",
 *          "name": "Marcello Jr",
 *          "email": "marcello@leads2b.com.br",
 *          "role": "Desenvolvedor FullSctack",
 *          "phone": "83988317867",
 *          "admissionDate": "2019-12-14T14:42:33.466Z",
 *          "__v": 0
 *      }]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0300",
 *      "message": "Erro ao buscar Funcionário",
 *      "errors": {
 *        "msg": "Mensagem de erro aqui"
 *      }
 *   }
 */
export const getAll = async (request, response) => {
  try {
    response.json(await repository.getAll())
  } catch (err) {
    console.error(err)

    response.status(500).json(Object.assign(constants.employee.error.NOT_FOUND, { errors: { msg: err.message } }))
  }
}

/**
 * @api {get} /employee/:id Get (By ID)
 * @apiName GetEmployee
 * @apiGroup Employee
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Employee ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "_id": "5df4f4d9938a3200cdbfe960",
 *      "registration": "123456",
 *      "name": "Marcello Jr",
 *      "email": "marcello@leads2b.com.br",
 *      "role": "Desenvolvedor FullSctack",
 *      "phone": "83988317867",
 *      "admissionDate": "2019-12-14T14:42:33.466Z",
 *      "__v": 0
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0300",
 *      "message": "Erro ao buscar Funcionário",
 *      "errors": { "msg": "Mensagem de erro aqui"}
 *   }
 */
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.params.id))
  } catch (err) {
    console.error(err)

    response.status(500).json(Object.assign(constants.employee.error.NOT_FOUND, { errors: { msg: err.message } }))
  }
}

/**
 * @api {post} /employee Create
 * @apiName CreateEmployee
 * @apiGroup Employee
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "registration": "123456"
 *      "name": "Marcello Jr",
 *      "email": "marcello@leads2b.com.br",
 *      "role": "Desenvolvedor FullSctack",
 *      "phone": "83988317867",
 *      "admissionDate": "2020-01-15"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0200",
 *      "message": "Usuário criado com sucesso",
 *      "employee": {
 *          "_id": "5df50742202466003b524964",
 *          "registration": "654321",
 *          "name": "Haynna Freitas",
 *          "email": "hayanna@leads2b.com.br",
 *          "role": "Aux. de RH",
 *          "phone": "83988317867",
 *          "admissionDate": "2020-01-15T00:00:00.000Z",
 *          "__v": 0
 *      }
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0301",
 *      "message": "Erro ao criar o Funcionário",
 *      "errors": {
 *          "msg": "Ops! Matrícula já existe."
 *      }
 *   }
 */
export const create = async (request, response) => {
  try {
    const employee = await repository.create(request.body)

    response.json(Object.assign(constants.user.success.CREATE, { employee }))
  } catch (err) {
    console.error(err)

    response.status(500).json(Object.assign(constants.employee.error.CREATE, { errors: { msg: err.message } }))
  }
}

/**
 * @api {put} /employee Update
 * @apiName UpdateEmployee
 * @apiGroup Employee
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "5df4f4d9938a3200cdbfe960",
 *      "name": "Marcello Jr",
 *      "email": "marcello@leads2b.com.br",
 *      "role": "Desenvolvedor Fullstack",
 *      "phone": "83987912383",
 *      "admissionDate": "2020-01-15"
 *    }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0301",
 *      "message": "Funcionário atualizado com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0302",
 *      "message": "Erro ao atualizar o Funcionário",
 *      "errors": {
 *        "msg": "Mensagem de erro aqui"
 *      }
 *   }
 */
export const update = async (request, response) => {
  try {
    await repository.update(request.body)
    response.json(constants.employee.success.UPDATE)
  } catch (err) {
    console.error(err)

    response.status(500).json(Object.assign(constants.employee.error.UPDATE, { errors: { msg: err.message } }))
  }
}

/**
 * @api {delete} /employee/:id Delete
 * @apiName DeleteEmployee
 * @apiGroup Employee
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Employee ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0302",
 *      "message": "Funcionário removido com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0303",
 *      "message": "Erro ao remover o Funcionário",
 *      "errors": {
 *          "msg": "Mensagem de erro aqui"
 *      }
 *   }
 */
export const remove = async (request, response) => {
  try {
    await repository.remove(request.params.id)
    response.json(constants.employee.success.REMOVE)
  } catch (err) {
    console.error(err)

    response.status(500).json(Object.assign(constants.employee.error.REMOVE, { errors: { msg: err.message } }))
  }
}
