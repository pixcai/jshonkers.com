import Koa from 'koa'

export default class IM extends Koa {
	static get url() {
		return '/im'
	}
}