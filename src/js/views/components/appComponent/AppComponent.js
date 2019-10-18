import './appComponent.css';

export default class AppComponent {
    constructor(parentNode, app) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app-component');
        appDiv.addEventListener('click', () =>
            alert(`Version: ${app.getVersion()}`)
        );

        const apdexField = document.createElement('span');
        apdexField.classList.add('app-apdex-field');
        apdexField.textContent = app.getApdex();
        appDiv.appendChild(apdexField);

        const nameAndContribField = document.createElement('span');
        nameAndContribField.classList.add('app-name-field');
        nameAndContribField.textContent = app.getName();
        appDiv.appendChild(nameAndContribField);

        parentNode.appendChild(appDiv);
    }
}
