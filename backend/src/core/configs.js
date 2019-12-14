import dotenv from 'dotenv'

dotenv.config()

export default {
  API_BASE_PATH: process.env.API_BASE_PATH,
  server: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  db: {
    URI: process.env.DBURI
  },
  SECRET_KEY: process.env.SECRET_KEY
}
