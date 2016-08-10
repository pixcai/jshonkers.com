import App from '../../lib/App'
import Serve from '../../lib/Serve'
import Routes from './src/Routes'
import { createServer } from 'http'

// use for built-in modules
import Mount from 'koa-mount'
import Chat from '../../builtins/Chat'

import config from '../../jshonkers.config'


const router = Router.fromRoutes(Routes({
	__CHAT_PATH__: Chat.MOUNT_PATH
}))
const app = new App()

app
	.use(Serve(process.cwd() + config.__PUBLIC__))
	.use(router.routes())
	.use(router.allowedMethods())

// mount built-in modules
app.use(Mount(Chat.MOUNT_PATH, new Chat()))

export default createServer(app.callback())
