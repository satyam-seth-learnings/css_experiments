import { openNewPageEvent } from "../common/events";
import { PageConfig } from "./type";

/**
 * 
 * Page 
 * 
 */
export class Page {
    // page configuration
    private config: PageConfig;


    constructor(config: PageConfig) {
        this.config = config;
    }

    /**
     * 
     * page skeleton
     * 
     * @returns {HTMLDivElement}
     * 
     */
    private skeleton(): HTMLDivElement {
        const page = document.createElement('div');
        page.id = this.id;
        page.className = 'page';

        // append empty container
        page.appendChild(this.emptyContainer);

        // append content container
        page.appendChild(this.contentContainer);

        return page;
    }

    /**
     * 
     * Content container
     * 
     * @returns {HTMLDivElement}
     * 
     */
    private get contentContainer(): HTMLDivElement {
        const contentContainer = document.createElement('div');
        contentContainer.className = 'page__content-container';

        // append content
        contentContainer.appendChild(this.content);

        // append page button
        contentContainer.appendChild(this.openPageButton);

        return contentContainer;
    }

    /**
     * 
     * Empty container to close the page
     * 
     * @returns {HTMLDivElement}
     */
    private get emptyContainer(): HTMLDivElement {
        const emptyContainer = document.createElement('div');
        emptyContainer.className = 'page__empty-container';

        // add click event listener
        emptyContainer.addEventListener('click', () => {
            console.log(`closing current page - namespace -> ${this.config.namespace}`);
            this.destroy();
        })

        return emptyContainer;
    }

    /**
     * 
     * content show page name
     * 
     * @returns {HTMLParagraphElement}
     */
    private get content(): HTMLParagraphElement {
        const contentElement = document.createElement('p');
        contentElement.className = 'page__content';
        contentElement.innerText = `Page - ${this.config.namespace}`;
        return contentElement;
    }

    /**
     * 
     * button to open new page
     * 
     * @returns {HTMLButtonElement}
     * 
     */
    get openPageButton(): HTMLButtonElement {
        const button = document.createElement('button');
        button.className = 'open-page-btn';
        button.innerText = 'Open New Page';

        // add click event listener
        button.addEventListener('click', () => {
            console.log(`opening new page - namespace -> ${this.config.namespace}`);
            window.dispatchEvent(openNewPageEvent);
        })

        return button;
    }

    /**
     * 
     * Unique id for page
     * 
     * @returns {string}
     * 
     */
    get id(): string {
        return `page-${this.config.namespace}`;
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

    /**
     * 
     * Remove page skeleton from dom
     * 
     */
    private destroy(): void {
        this.element.remove();
    }

    /**
     * 
     * Append current page skeleton into parent element 
     * 
     * @param parentElement {HTMLElement}
     */
    build(parentElement: HTMLElement) {
        parentElement.appendChild(this.skeleton());
    }
}