import Router from '../../../lib/Router'
import Chat from '../index'
import indexTpl from '../views'
import config from '../chat.config'

const routes = {
  '/': {
    method: 'GET',
    callback: [ctx => {
      ctx.body = indexTpl(Object.assign(config.tplVars, {
        __MOUNT_PATH__: Chat.MOUNT_PATH
      }))
    }]
  }
}

export default Router.fromRoutes(routes)
