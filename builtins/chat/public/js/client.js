const socket = window.io({ path: location.pathname })

socket.on('connection',() => {
	console.log('connected successful!')
})
