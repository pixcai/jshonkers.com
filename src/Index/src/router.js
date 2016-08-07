import Router from '../../../lib/Router'
import indexTpl from '../../../views/Index'

const routes = {
	'/': {
		method: 'GET',
		callback: [ctx => {
			ctx.body = indexTpl()
		}]
	}
}

export default Router.fromRoutes(routes)
