import KoaRouter from 'koa-router'


export default class Router {
  constructor(opts) {
    return Object.create(new KoaRouter(opts))
  }

  static fromRoutes(routes, opts) {
    return routes.reduce((router, route) => {
      let methods = Object.keys(route).reduce((prev, next) => {
        return prev.concat(next.split(','))
      }, [])

      return methods.reduce(method => {
        return router[method](route.pattern, ...route.callback)
      })
    }, new Router(opts))
  }
}
