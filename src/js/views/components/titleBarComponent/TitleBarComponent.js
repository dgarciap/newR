import './titleBarComponent.css';

export default class TitleBarComponent {
    constructor(parentNode, userEmail, isList = false, onChange) {
        this.onChangeCallback = onChange;
        const titleBarContainer = document.createElement('div');
        titleBarContainer.classList.add('title-bar-container');

        const titleNode = document.createElement('p');
        titleNode.classList.add('page-title');
        titleNode.textContent = 'Apps by Host';

        const emailNode = document.createElement('p');
        emailNode.classList.add('user-email');
        emailNode.textContent = `for user ${userEmail}`;

        this.checkboxInput = document.createElement('input');
        this.checkboxInput.classList.add('checkbox-input');
        this.checkboxInput.setAttribute('type', 'checkbox');
        this.checkboxInput.checked = isList;
        this.checkboxInput.addEventListener(
            'change',
            this._onChange.bind(this),
            false
        );

        const checkboxText = document.createElement('p');
        checkboxText.classList.add('checkbox-p');
        checkboxText.textContent = 'Show as list';

        titleBarContainer.appendChild(titleNode);
        titleBarContainer.appendChild(emailNode);
        titleBarContainer.appendChild(this.checkboxInput);
        titleBarContainer.appendChild(checkboxText);
        parentNode.appendChild(titleBarContainer);
    }

    _onChange() {
        if (this.onChangeCallback)
            this.onChangeCallback(this.checkboxInput.checked);
    }
}
