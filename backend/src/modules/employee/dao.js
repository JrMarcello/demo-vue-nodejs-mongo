import mongoose from 'mongoose'

const { Schema } = mongoose

const Employee = new Schema({
  id: String,
  registration: {
    type: String,
    unique: true,
    required: [true, 'Matrícula é um campo obrigatŕio']
  },
  name: {
    type: String,
    required: [true, 'Nome é um campo obrigatŕio']
  },
  email: {
    type: String,
    required: [true, 'Email é um campo obrigatŕio']
  },
  role: {
    type: String,
    required: [true, 'Senha é um campo obrigatŕio']
  },
  phone: String,
  admissionDate: { type: Date, default: Date.now }
})

Employee.post('save', (error, doc, next) => {
  next(error.code === 11000 ? new Error('Ops! Matrícula já existe.') : error)
})

export default mongoose.model('Employee', Employee)
