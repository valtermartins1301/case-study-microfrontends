import {registerApplication, start} from 'single-spa';
import * as serviceWorker from './serviceWorker';

const loadRoot = () => import('./root.app.js');
const loadHeaderApp = () => window.System.import('@creditas/header');
const loadSimulationsApp = () => window.System.import('@creditas/simulations');
const loadProcessingApp = () => window.System.import('@creditas/processing');
const loadInspectionApp = () => window.System.import('@creditas/inspection');

registerApplication('root', loadRoot, () => true);
registerApplication('header', loadHeaderApp, () => true);
registerApplication('simulations', loadSimulationsApp, () => true);
registerApplication('processing', loadProcessingApp, () => true);
registerApplication('inspection', loadInspectionApp, () => true);

start();

serviceWorker.unregister();
