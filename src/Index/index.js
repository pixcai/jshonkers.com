import App from '../../lib/App'
import router from './src/router'

export default class JSHonkers extends App {
	constructor() {
		super()

		this.use(router.routes())
			.use(router.allowedMethods())
	}
}
