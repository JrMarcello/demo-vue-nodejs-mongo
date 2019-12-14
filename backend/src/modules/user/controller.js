import * as repository from './repository'

/**
 * @api {post} /user Create
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 * @apiParam {string} username User usermane
 * @apiParam {string} passwaord User password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com",
 *      "username": "Marcello Jr",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Usuário criado com sucesso",
 *      "user": [{
 *        "id": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *        "id_profile": 1,
 *        "email": "marcello@mail.com",
 *        "username": "Marcello Jr",
 *        "password": "$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.",
 *        "avatar_url": null,
 *        "create_date": "2019-09-14T19:25:26.560Z",
 *        "active": true
 *      }]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "email",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    response.json(await repository.create(request.body))
  } catch (err) {
    console.error(err)

    response.status(500).json(err.message)
  }
}

/**
 * @api {post} /user/login Login
 * @apiName LoginUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 * @apiParam {string} password User password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0003",
 *      "message": "Usuario logado",
 *      "token": "eyJhbGciOiJIUzI1NiIsIdkadjJHJHKkjnbajbHBNAIKGMA"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 2505,
 *      "message": "Email ou senha inválido"
 *   }
 */
export const login = async (request, response) => {
  try {
    response.json(await repository.login(request.body))
  } catch (err) {
    console.error(err)

    response.status(500).json(err.message)
  }
}
