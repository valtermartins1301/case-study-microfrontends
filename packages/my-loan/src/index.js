import {registerApplication, start} from 'single-spa';
import * as serviceWorker from './serviceWorker';

const somePrefix = location => prefix => {
  return location.href.indexOf(`${location.origin}/${prefix}`) !== -1;
};

const prefix = (location, ...prefixies) => prefixies.some(somePrefix(location));

const loadRoot = () => import('./root.app.js');
const loadHeaderApp = () => window.System.import('@creditas/header');
const loadSimulationsApp = () => window.System.import('@creditas/simulations');
const loadProcessingApp = () => window.System.import('@creditas/processing');
const loadInspectionApp = () => window.System.import('@creditas/inspection');

const isActiveSimulations = location => prefix(location, 'simulacao');
const isActiveProcessing = location => prefix(location, 'processamento');
const isActiveInspection = location => prefix(location, 'vistoria');

registerApplication('root', loadRoot, () => true);
registerApplication('header', loadHeaderApp, () => true);
registerApplication('simulations', loadSimulationsApp, isActiveSimulations);
registerApplication('processing', loadProcessingApp, isActiveProcessing);
registerApplication('inspection', loadInspectionApp, isActiveInspection);

start();

serviceWorker.unregister();
