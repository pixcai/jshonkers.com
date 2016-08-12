const socket = window.io(location.origin, {
	path: location.pathname
})

socket.on('connection',() => {
	console.log('connected successful!')
})
