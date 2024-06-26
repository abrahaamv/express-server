const config = require('./helpers/config')
const logger = require('./helpers/logger')

const app = require('./app')

app.listen(config.PORT, () => {
  logger.info(`Server started, running on PORT: ${config.PORT}`)
})
