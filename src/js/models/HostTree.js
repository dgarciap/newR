import Utils from '../utils';
import Host from './Host';

export default class HostTree {
    constructor() {
        this.hostList = [];
    }

    /**
     * Given a host returns the position of this host in our hostList array.
     * If this host is not on the array, returns the position where it should be
     * positioned.
     */
    _getHostPosition(host) {
        const pos = Utils.getElementPosition(
            this.hostList,
            host,
            0,
            this.hostList.length - 1,
            Host.isEqual,
            Host.isLess
        );
        return pos;
    }

    /**
     * Returns host with name hostName.
     * If the host is not in hostList, throws an exception.
     */
    _getHost(hostName) {
        const mockHost = new Host(hostName);
        const pos = this._getHostPosition(mockHost);
        if (!this.hostList[pos] || !Host.isEqual(this.hostList[pos], mockHost))
            throw Error(`${mockHost.toString()} is not on host tree.`);

        return this.hostList[pos];
    }

    /**
     * Returns host with name hostName.
     * If the host is not in hostList, It will add it to the list and
     * return it.
     */
    _getOrCreateHost(hostName) {
        const newHost = new Host(hostName);
        const pos = this._getHostPosition(newHost);
        if (!this.hostList[pos] || !Host.isEqual(this.hostList[pos], newHost))
            this.hostList = Utils.insertElement(this.hostList, newHost, pos);

        return this.hostList[pos];
    }

    getTopAppsByHost(hostName) {
        const host = this._getHost(hostName);
        return host.getTopApps();
    }

    addAppToHosts(appData, hostNames) {
        hostNames.forEach(hostName => {
            const host = this._getOrCreateHost(hostName);
            host.addApp(appData);
        });
    }

    removeAppFromHosts(appData, hostNames) {
        hostNames.forEach(hostName => {
            const host = this._getHost(hostName);
            host.removeApp(appData);
        });
    }

    getHostList() {
        return this.hostList;
    }
}
