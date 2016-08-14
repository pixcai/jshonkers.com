const events = {
	connection: socket => {
		console.log('client connected ...')
		socket.emit('connection')
	}
}


export default source => {
	return Object.keys(events).reduce((source, event) => {
		return source['on'](event, events[event])
	}, source)
}

