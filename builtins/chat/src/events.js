export default {
	connection: socket => {
		console.log('client connected ...')
		socket.emit('connection')
	}
}
