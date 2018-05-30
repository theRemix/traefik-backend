const fastify = require('fastify')()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

fastify.get('/', async (request, reply) => {
  return { host : request.headers.host }
})

const start = async () => {
  try {
    await fastify.listen(PORT, HOST)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
