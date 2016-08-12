import LibApp from '../../lib/App'
import libServe from '../../lib/serve'
import server from './src/server'
import routes from './src/routes'
import fromRoutes from '../../util/fromRoutes'

import config from './chat.config'


const router = fromRoutes(routes)

class Chat extends LibApp {
	constructor() {
		super()

		this
			.use(libServe(config.__PUBLIC__))
			.use(router.routes())
			.use(router.allowedMethods())

		server(config.serverConfig)
	}
}


export default new Chat()
