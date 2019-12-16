import mongoose from 'mongoose'

const { Schema } = mongoose

const User = new Schema({
  id: String,
  username: {
    type: String,
    required: [true, 'Nome é um campo obrigatŕio']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email é um campo obrigatŕio']
  },
  password: {
    type: String,
    required: [true, 'Senha é um campo obrigatŕio']
  },
  token: String,
  avatar_url: String
})

User.post('save', (error, doc, next) => {
  next(error.code === 11000 ? new Error('Ops! Email já existe.') : error)
})

export default mongoose.model('User', User)
