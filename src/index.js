import Koa from 'koa'
import mount from 'koa-mount'
import Router from 'koa-router'

import IM from '../builtins/IM'
import Index from './Index'

import IMPug from '../views/IM'
import IndexPug from '../views/Index'

import globalConfig from '../jshonkers.config'

class JSHonkers extends Koa {
  constructor(router) {
    super()

    this.use(router.routes())
    	.use(router.allowedMethods())
  }
}

const router = new Router()
router.get(Index.url, async ctx => ctx.body = IndexPug())

const app = new JSHonkers(router)
app.use(mount(IM.url, new IM())).listen(globalConfig.server.port)
