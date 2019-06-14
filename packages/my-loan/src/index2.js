import {registerApplication, start} from 'single-spa'
import {hotjar} from 'react-hotjar'
import {activeRoot, activeTarefitas, activeHeader} from './activityFns'
import * as serviceWorker from './serviceWorker'

const HJID = process.env.HJID
const HJSV = process.env.HJSV

const SystemJS = window.SystemJS

const loadRoot = () => import('./root.app.js')
const loadTarefitas = () => SystemJS.import('tarefitas!sofe')
const loadHeader = () => SystemJS.import('header!sofe')

hotjar.initialize(HJID, HJSV)
registerApplication('root', loadRoot, activeRoot)
registerApplication('header', loadHeader, activeHeader)
registerApplication('tarefitas-app', loadTarefitas, activeTarefitas)

start()
serviceWorker.unregister()
