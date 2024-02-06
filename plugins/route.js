import fp from 'fastify-plugin'

fp((fastify, opts) => {
  fastify.get('/plugin', async (req, rep) => {
    return { hello: "world" }
  })
})

export default fp;
