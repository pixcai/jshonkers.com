import App from '../../lib/App'
import Serve from '../../lib/Serve'
import Router from '../../lib/Router'

import Routes from './src/Routes'
import Server from './src/Server'

import config from './chat.config'


export default class Chat extends App {
	constructor(srv) {
		super()

		const router = Router.fromRoutes(Routes({
			__MOUNT_PATH__: Chat.MOUNT_PATH
		}))

		this.use(Serve(config.__PUBLIC__))
			.use(router.routes())
			.use(router.allowedMethods())

		server()
	}

	static set MOUNT_PATH(path) {
		this.__MOUNT_PATH__ = path
	}

	static get MOUNT_PATH() {
		return this.__MOUNT_PATH__ || '/'.concat(Chat.name.toLowerCase())
	}
}
