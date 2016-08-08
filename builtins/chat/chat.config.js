import { basename } from 'path'
import globalConfig from '../../jshonkers.config'

export default {
	__PUBLIC__: `${__dirname}/${basename(globalConfig.__PUBLIC__)}`,
	tplVars: {},
	serverConfig: {}
}
