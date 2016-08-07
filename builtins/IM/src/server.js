import SocketIO from 'socket.io'

export default opts => {
	return new SocketIO(opts)
}
