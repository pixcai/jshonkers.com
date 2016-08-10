import SocketIO from 'socket.io'
import server from '../../../src/Index/index'


export default opts => {
	return new SocketIO(server, opts)
}
