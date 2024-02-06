import Fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import * as path from 'path'
import { fileURLToPath } from 'url'


const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

const fastify = Fastify({
  logger: true
})

fastify.register(autoLoad, {
  dir: path.join(__dirname, 'plugins')
})

// Run the server!
fastify.listen({ port: 3000 }, function(err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
