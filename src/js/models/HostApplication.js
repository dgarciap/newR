export default class HostApplication {
    constructor(name, contributors, version, apdex, hostList) {
        this.name = name;
        this.contributors = contributors;
        this.version = version;
        this.apdex = apdex;
        this.hostList = hostList;
    }

    getName() {
        return this.name;
    }

    getApdex() {
        return this.apdex;
    }

    getContributors() {
        return this.contributors;
    }

    /**
     * Returns true if both apps are the same app.
     *
     * We consider both apps to be the same when they have the same name,
     * version and apdex.
     */
    static isEqual(app1, app2) {
        return (
            app1.name === app2.name &&
            app1.version === app2.version &&
            app1.apdex === app2.apdex
        );
    }

    static isLess(app1, app2) {
        return (
            app1.apdex > app2.apdex ||
            (app1.apdex === app2.apdex && app1.name < app2.name) ||
            (app1.apdex === app2.apdex &&
                app1.name === app2.name &&
                app1.version > app2.version)
        );
    }
}
