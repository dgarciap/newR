import './hostGridComponent.css';
import HostComponent, {
    NARROW_STYLE_MODE,
    WIDE_STYLE_MODE
} from '../hostComponent/HostComponent';

export const GRID_MODE = 'grid_m';
export const LIST_MODE = 'list_m';

export default class HostGridComponent {
    constructor(parentNode, hostList, defaultMode = GRID_MODE) {
        this.parentNode = parentNode;
        this.hostListContainer = document.createElement('div');
        this.hostListContainer.classList.add('host-grid');

        this.hostNodes = [];
        hostList.forEach(host => {
            this.hostNodes.push(
                new HostComponent(this.hostListContainer, host)
            );
        });

        this.parentNode.appendChild(this.hostListContainer);

        this.changeMode(defaultMode);
    }

    changeMode(mode) {
        if (mode === GRID_MODE) {
            this.hostListContainer.classList.remove('list-mode');
            this.hostListContainer.classList.add('grid-mode');

            this.hostNodes.forEach(hostNode =>
                hostNode.changeMode(NARROW_STYLE_MODE)
            );
        } else {
            // LIST_MODE.
            this.hostListContainer.classList.remove('grid-mode');
            this.hostListContainer.classList.add('list-mode');

            this.hostNodes.forEach(hostNode =>
                hostNode.changeMode(WIDE_STYLE_MODE)
            );
        }
    }
}
