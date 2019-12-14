import mongoose from 'mongoose'
import configs from './configs'

mongoose.Promise = global.Promise

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

export default mongoose
  .connect(configs.db.URI, options)
  .then(() => {
    console.log(`DB connected! [${configs.db.URI}]`)
  })
  .catch(err => {
    console.error(err)
  })
