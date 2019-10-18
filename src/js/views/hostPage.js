import './hostPage.css';
import TitleBarComponent from './components/titleBarComponent/TitleBarComponent';
import HostGridComponent from './components/hostGridComponent/HostGridComponent';

const USER_EMAIL = 'pepito@gmail.com';

export default class HostPage {
    constructor() {
        this.parentNode = document.querySelector('#page-content');
    }

    attachPage(hostList) {
        // Clean page-content.
        while (this.parentNode.firstChild) {
            this.parentNode.removeChild(this.parentNode.firstChild);
        }

        this.titleBar = new TitleBarComponent(
            this.parentNode,
            USER_EMAIL,
            false,
            isList => console.log('isList' + isList)
        );
        this.hostGrid = new HostGridComponent(this.parentNode, hostList);
    }
}
