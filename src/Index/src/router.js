import Router from '../../../lib/Router'
import Chat from '../../../builtins/chat'
import indexTpl from '../../../views/Index'
import config from '../../../jshonkers.config'

const routes = {
	'/': {
		method: 'GET',
		callback: [ctx => {
			ctx.body = indexTpl(Object.assign(config.tplVars, {
				__CHAT_PATH__: Chat.MOUNT_PATH
			}))
		}]
	}
}

export default Router.fromRoutes(routes)
