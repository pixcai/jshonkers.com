import App from '../../lib/App'
import serve from '../../lib/serve'
import router from './src/router'
import config from '../../jshonkers.config'

export default class JSHonkers extends App {
	constructor() {
		super()

		this.use(serve(process.cwd() + config.__PUBLIC__))
			.use(router.routes())
			.use(router.allowedMethods())
	}
}
