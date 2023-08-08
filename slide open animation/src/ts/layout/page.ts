/**
 * 
 * Page 
 * 
 */
export default class Page {
    // namespace for generating unique id for page
    private namespace: string;

    constructor(namespace: string) {
        this.namespace = namespace;
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
            console.log('close current page');
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
        const content = document.createElement('p');
        content.className = 'page__content';
        content.innerText = `Page - ${this.namespace}`;
        return content;
    }

    /**
     * 
     * Unique id for page
     * 
     * @returns {string}
     * 
     */
    get id(): string {
        return `page-${this.namespace}`;
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