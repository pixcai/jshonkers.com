import Router from '../../../lib/Router'
import indexTpl from '../views'
import imConfig from '../im.config'

const routes = {
  '/': {
    method: 'GET',
    callback: [ctx => {
      ctx.body = indexTpl(Object.assign(imConfig.tplVars, {
        mountPath: ctx.mountPath
      }))
    }]
  }
}

export default Router.fromRoutes(routes)
