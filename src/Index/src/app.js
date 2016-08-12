import LibApp from '../../../lib/App'
import libServe from '../../../lib/serve'
import fromRoutes from '../../../util/fromRoutes'
import routes from './routes'

import config from '../../../jshonkers.config'


const router = fromRoutes(routes)

class App extends LibApp {
	constructor() {
		super()

		this
			.use(libServe(config.__PUBLIC__))
			.use(router.routes())
			.use(router.allowedMethods())
	}
}


export default new App()
