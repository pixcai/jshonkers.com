import renderTpl from '../../../util/renderTpl'
import indexPage from '../../../views/Index'

import config from '../../../jshonkers.config'


const render = tpl => renderTpl(tpl, config.tplVars)


export default {
	'/': [['GET'], render(indexPage)]
}
