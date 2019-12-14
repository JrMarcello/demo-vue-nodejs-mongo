import server from './express'
import configs from './configs'
import './database'

server.listen(configs.server.PORT, configs.server.HOST, () => {
  console.log(`Server running in http://localhost:${configs.server.PORT}`)
  console.log('To stop type: ctrl + c')
})
