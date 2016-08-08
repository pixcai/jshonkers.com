import App from '../../lib/App'
import router from './src/router'
import serve from '../../lib/serve'
import server from './src/server'
import config from './chat.config'

export default class Chat extends App {
	constructor(srv) {
		super()

		this.use(serve(config.__PUBLIC__))
			.use(router.routes())
			.use(router.allowedMethods())

		server().attach(srv)
	}

	static set MOUNT_PATH(path) {
		this.__MOUNT_PATH__ = path
	}

	static get MOUNT_PATH() {
		return this.__MOUNT_PATH__ || '/'.concat(Chat.name.toLowerCase())
	}
}
