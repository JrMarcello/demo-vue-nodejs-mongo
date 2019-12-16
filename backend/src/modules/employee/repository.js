import dao from './dao'

/**
 *  Get all Users
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = () => dao.find()

/**
 * Find a User by ID
 *
 * @param {string} _id - User ID
 * @returns - Returns a object
 */
export const getById = async _id => (await dao.find({ _id }))[0]

/**
 * Saves a User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const create = data => dao.create(data)

/**
 * Updates an User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const update = data => {
  return dao.updateOne(
    { _id: data._id },
    {
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone,
      admissionDate: data.admissionDate
    }
  )
}

/**
 * Remove an User
 *
 * @param {string} _id - User ID
 * @returns - Returns a object
 */
export const remove = _id => dao.remove({ _id })
