export default class App {
    // unique app name 
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * 
     * basic app skeleton
     * 
     * @returns {HTMLElement}
     * 
     */
    private get skeleton(): HTMLElement {
        const app = document.createElement('main');
        app.id = this.id;
        app.className = 'app';
        return app;
    }

    /**
     * 
     * append app skeleton into dom body
     * 
     */
    build() {
        document.body.appendChild(this.skeleton)
    }

    /**
     * 
     * unique app id
     * 
     * @returns {string}
     * 
     */
    get id(): string {
        return `app-${this.name}`
    }

    /**
     * 
     * querySelect for app
     * 
     * @returns {HTMLElement} 
     * 
     */
    get element(): HTMLElement {
        return document.getElementById(this.id)!;
    }
}