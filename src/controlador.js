
import { components } from './index.js';

export const controlador = {
    changeTmp: (hash) => {
        const sectionMain = document.getElementById ('container');
        sectionMain.innerHTML = ' ';
        switch (hash) {
            case '#/':
                sectionMain.appendChild(components.home());
                break;
            case '#/login':
                sectionMain.appendChild(components.login());
                break;
            case '#/createAccount':
                sectionMain.appendChild(components.account());
                break;
            case '#/blog':
               // sectionMain.appendChild(components.blog());
                break;
                default:
                sectionMain.appendChild(components.nonExistent());
                   //sectionMain.appendChild(components.login());
       }
    }

};