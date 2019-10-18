export default class HostApplication {
    constructor(name, version, apdex) {
        this.name = name;
        this.version = version;
        this.apdex = apdex;
    }

    getName() {
        return this.name;
    }

    getVersion() {
        return this.version;
    }

    getApdex() {
        return this.apdex;
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
