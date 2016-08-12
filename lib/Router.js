import KoaRouter from 'koa-router'


export default class Router {
  constructor(opts) {
    return Object.create(new KoaRouter(opts))
  }
}
