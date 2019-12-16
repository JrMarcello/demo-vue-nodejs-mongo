import bcrypt from 'bcrypt'
import constants from '../../core/constants'
import { getToken } from '../../core/middlewares/auth'
import dao from './dao'

// /**
//  *  Get all Users
//  *
//  * @param {object} params - Params for query
//  * @returns - Returns a object
//  */
// export const getAll = () => {
//   return dao.find({})
// }

// /**
//  * Find a User by ID
//  *
//  * @param {string} id - User ID
//  * @returns - Returns a object
//  */
// export const getById = async id => {
//   return dao.find({ _id: id })
// }

/**
 * Saves a User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const create = data => {
  data.password = bcrypt.hashSync(data.password, 10)

  return dao.create(data)
}

// /**
//  * Updates an User
//  *
//  * @param {object} data - User data
//  * @returns - Returns a object
//  */
// export const update = data => {
//   return dao.update({
//     id: data.id,
//     username: data.username,
//     password: data.password
//   })
// }

// /**
//  * Remove an User
//  *
//  * @param {string} id - User ID
//  * @returns - Returns a object
//  */
// export const remove = id => {
//   return dao.remove(id)
// }

/**
 * Login an User, given an email and password
 *
 * @param {object} credentials - Login data
 * @returns - Returns a object
 */
export const login = async credentials => {
  const user = await dao.findOne({ email: credentials.email })

  if (!user || !bcrypt.compareSync(credentials.password, user.password)) throw Error(constants.user.error.LOGIN)

  user.token = await getToken({ id: user._id })

  user.save()

  return user
}
