/**
 * Manages application data loading.
 *
 * NOTE: By isolating the loading of the application data we will be able to
 * connect to a real server without changing the rest of the code.
 */
export default class AppLoader {
    loadApplications(onLoad, onError) {
        if (this.appData) {
            onLoad(this.appData);
        }

        fetch('src/data/host-app-data.json')
            .then(response => response.json())
            .then(myJson => {
                this.appData = myJson;
                onLoad(this.appData);
            })
            .catch(error => onError(error));
    }
}
