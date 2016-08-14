import LibApp from '../../lib/App'
import libServe from '../../lib/serve'
import events from './src/events'
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

		this.io = server(config.serverConfig)
		events(this.io.of(config.tplVars.__MOUNT_PATH__))
	}
}


export default new Chat()
