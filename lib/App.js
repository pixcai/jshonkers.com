import Koa from 'koa'


export default class App {
	constructor() {
		return Object.create(new Koa())
	}
}
