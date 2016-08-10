import Route from '../../../util/Route'
import Render from '../../../util/Render'
import indexTpl from '../views'
import config from '../chat.config'


const render = (tpl, tplVars={}) => {
	return Render(tpl, Object.assign(tplVars, config.tplVars))
}

export default opts => [
	Route('GET', '/', render(indexTpl, opts))
]
