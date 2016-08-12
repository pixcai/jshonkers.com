import app from './src/app'
import { createServer } from 'http'

import mount from 'koa-mount'
import chat from '../../builtins/chat'

import config from '../../builtins/chat/chat.config'


app.use(mount(config.tplVars.__MOUNT_PATH__, chat))


export default createServer(app.callback())
