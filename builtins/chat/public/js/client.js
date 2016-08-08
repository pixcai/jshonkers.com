const client = window.io(location.origin, { path: location.pathname })

client.on('connection', () => {
	console.log('connected successful!')
})
