import Route from '../../../util/Route'
import Render from '../../../util/Render'
import config from '../../../jshonkers.config'
import indexTpl from '../../../views/Index'


const render = (tpl, tplVars={}) => {
	return Render(tpl, Object.assign(tplVars, config.tplVars))
}

export default opts => [
	Route('GET', '/', render(indexTpl, opts))
]
