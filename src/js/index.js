import AppLoader from './loaders/appLoader';
import HostTree from './models/HostTree';
import HostPage from './views/hostPage';

const appLoader = new AppLoader();
const hostTree = new HostTree();
appLoader.loadApplications(
    appsData => {
        appsData.apps.forEach(appData => {
            hostTree.addAppToHosts(appData, appData.host);
        });

        const hostPage = new HostPage();
        hostPage.attachPage(hostTree.getHostList());
    },
    error => {
        console.error('Error', error.stack);
        console.error('Error', error.name);
        console.error('Error', error.message);
    }
);
