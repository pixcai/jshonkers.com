import SocketIO from 'socket.io'
import events from './events'
import server from '../../../src/Index/index'

import config from '../chat.config'


export default opts => {
	return Object.keys(events).reduce((io, event) => {
		return io.of(config.tplVars.__MOUNT_PATH__).on(event, events[event])
	}, new SocketIO(server, opts))
}
