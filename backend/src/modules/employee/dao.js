import mongoose from 'mongoose'

const { Schema } = mongoose

const Employee = new Schema({
  id: String,
  registration: String,
  name: String,
  email: String,
  role: String,
  phone: String,
  admissionDate: { type: Date, default: Date.now }
})

export default mongoose.model('Employee', Employee)
