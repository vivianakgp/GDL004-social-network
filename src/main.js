import { controler } from '../controlador/controler.js';
//import { firebase } from '..firebase/app.js';

const init = () => {
    controler.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => {
        controler.changeTmp(window.location.hash);
        
    })
};
window.addEventListener('load', init )