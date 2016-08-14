import SocketIO from 'socket.io'
import server from '../../../src/Index/index'


export default opts => new SocketIO(server, opts)

