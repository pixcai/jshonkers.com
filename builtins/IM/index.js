import App from '../../lib/App'
import router from './src/router'
import serve from '../../lib/serve'
import server from './src/server'
import imConfig from './im.config'

export default class IM extends App {
	constructor(srv) {
		super()

		this.use(serve(imConfig.staticDir))
			.use(router.routes())
			.use(router.allowedMethods())

		server().attach(srv)
	}

	static set mountPath(path) {
		this._mountPath = path
	}

	static get mountPath() {
		return this._mountPath || imConfig.mountPath
	}
}
