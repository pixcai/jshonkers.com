import KoaRouter from 'koa-router'

export default class Router {
  constructor(opts) {
    return Object.create(new KoaRouter(opts))
  }

  static fromRoutes(routes, opts) {
    const methods = Object.keys(routes).map(pattern => {
      return routes[pattern].method.toLowerCase()
    })

    return Object.keys(routes).reduce((router, pattern, i) => {
      return router[methods[i]](pattern, ...routes[pattern].callback)
    }, new Router(opts))
  }
}
