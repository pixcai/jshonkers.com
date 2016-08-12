import SocketIO from 'socket.io'
import events from './events'
import server from '../../../src/Index/index'


export default (nsp, opts) => {
	return Object.keys(events).reduce((io, event) => {
		return io.on(event, events[event])
	}, new SocketIO(server, opts).of(nsp))
}
