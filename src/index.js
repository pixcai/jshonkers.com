import JSHonkers from './Index'
import mount from 'koa-mount'
import IM from '../builtins/IM'
import config from '../jshonkers.config'

const app = new JSHonkers()

app.use(mount(IM.mountPath, new IM(app)))
app.listen(config.serverConfig.port)
