import Utils from '../utils';
import HostApplication from './HostApplication';

const NUM_TOP_APPS = 25;

/**
 * Contains an attribute appList with a list of apps ordered by apex.
 */
export default class Host {
    constructor(name) {
        this.name = name;
        this.appList = [];
    }

    static _createHostApp(appData) {
        return new HostApplication(
            appData.name,
            appData.version,
            appData.apdex
        );
    }

    addApp(appData) {
        const app = Host._createHostApp(appData);
        const pos = Utils.getElementPosition(
            this.appList,
            app,
            0,
            this.appList.length - 1,
            HostApplication.isEqual,
            HostApplication.isLess
        );
        if (this.appList[pos] && HostApplication.isEqual(this.appList[pos], app))
            throw Error(
                `${app.toString()} is already on ${this.toString()} app list.`
            );

        this.appList = Utils.insertElement(this.appList, app, pos);
    }

    removeApp(appData) {
        const app = Host._createHostApp(appData);
        const pos = Utils.getElementPosition(
            this.appList,
            app,
            0,
            this.appList.length - 1,
            HostApplication.isEqual,
            HostApplication.isLess
        );
        if (!HostApplication.isEqual(this.appList[pos], app))
            throw Error(
                `${app.toString()} is not on ${this.toString()} app list.`
            );

        this.appList = Utils.removeElement(this.appList, pos);
    }

    getTopApps() {
        return this.appList.slice(0, NUM_TOP_APPS);
    }

    getTop5Apps() {
        return this.appList.slice(0, 5);
    }

    getHostName() {
        return this.name;
    }

    toString() {
        return `Host: ${this.name}`;
    }

    static isEqual(host1, host2) {
        return host1.name === host2.name;
    }

    static isLess(host1, host2) {
        return host1.name < host2.name;
    }
}
