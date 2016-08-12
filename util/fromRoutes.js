import LibRouter from '../lib/Router'


export default (routes, opts) => {
	return Object.keys(routes).reduce((router, path) => {
		router.register(path, ...routes[path])
		return router
	}, new LibRouter(opts))
}
