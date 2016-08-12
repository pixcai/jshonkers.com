import chatConfig from './builtins/chat/chat.config'


export default {
	__PUBLIC__: `${process.cwd()}/${__dirname}/public`,
	serverConfig: {
		port: 3000
	},
	tplVars: {
		__CHAT_PATH__: chatConfig.tplVars.__MOUNT_PATH__
	}
}
