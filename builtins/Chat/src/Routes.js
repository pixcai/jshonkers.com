import renderTpl from '../../../util/renderTpl'
import indexPage from '../views'

import config from '../chat.config'


const render = tpl => renderTpl(tpl, config.tplVars)


export default {
	'/': [['GET', 'POST'], render(indexPage)]
}
