export default (tpl, tplVars) => {
	return (ctx, next) => {
		ctx.body = tpl(tplVars)
		return next()
	}
}
