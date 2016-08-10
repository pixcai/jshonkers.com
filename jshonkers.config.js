import Chat from './builtins/chat'

export default {
	serverConfig: {
		port: 3000
	},
	__PUBLIC__: `${__dirname}/public`,
	tplVars: {
		__CHAT_PATH__: Chat.MOUNT_PATH
	}
}
