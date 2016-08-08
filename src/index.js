import JSHonkers from './Index/index'
import mount from 'koa-mount'
import Chat from '../builtins/chat'
import config from '../jshonkers.config'

const app = new JSHonkers()

app.use(mount(Chat.MOUNT_PATH, new Chat(app)))
app.listen(config.serverConfig.port)
