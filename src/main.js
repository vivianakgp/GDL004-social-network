import { controler } from '../controlador/controler.js';

const init = () => {
    controler.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        controler.changeTmp(window.location.hash);
    })
};
window.addEventListener('load', init);
