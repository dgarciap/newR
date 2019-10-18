import './hostComponent.css';
import AppComponent from '../appComponent/AppComponent';

export const NARROW_STYLE_MODE = 'narrow_mod';
export const WIDE_STYLE_MODE = 'wide_mod';

export default class HostComponent {
    constructor(parentNode, host, defaultMode = NARROW_STYLE_MODE) {
        this.parentNode = parentNode;

        this.hostDiv = document.createElement('div');
        this.hostDiv.classList.add('host-component');

        const hostName = document.createElement('div');
        hostName.classList.add('host-name');
        hostName.textContent = host.getHostName();
        this.hostDiv.appendChild(hostName);

        const appList = document.createElement('div');
        appList.classList.add('app-list');

        host.getTop5Apps().forEach(app => {
            new AppComponent(appList, app);
        });

        this.hostDiv.appendChild(appList);
        this.parentNode.appendChild(this.hostDiv);

        this.changeMode(defaultMode);
    }

    changeMode(mode) {
        if (mode === NARROW_STYLE_MODE) {
            this.hostDiv.classList.remove('wide-component');
            this.hostDiv.classList.add('narrow-component');
        } else {
            // WIDE_STYLE_MODE
            this.hostDiv.classList.remove('narrow-component');
            this.hostDiv.classList.add('wide-component');
        }
    }
}
