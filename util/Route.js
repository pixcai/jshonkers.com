export default (method, pattern, ...callback) => ({
	[method.toLowerCase()]: { pattern, callback }
})
