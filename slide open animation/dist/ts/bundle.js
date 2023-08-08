(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor(name) {
        this.name = name;
    }
    /**
     *
     * basic app skeleton
     *
     * @returns {HTMLElement}
     *
     */
    get skeleton() {
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
        document.body.appendChild(this.skeleton);
    }
    /**
     *
     * unique app id
     *
     * @returns {string}
     *
     */
    get id() {
        return `app-${this.name}`;
    }
    /**
     *
     * querySelect for app
     *
     * @returns {HTMLElement}
     *
     */
    get element() {
        return document.getElementById(this.id);
    }
}
exports.default = App;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Page
 *
 */
class Page {
    constructor(namespace) {
        this.namespace = namespace;
    }
    /**
     *
     * page skeleton
     *
     * @returns {HTMLDivElement}
     *
     */
    skeleton() {
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
    get contentContainer() {
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
    get emptyContainer() {
        const emptyContainer = document.createElement('div');
        emptyContainer.className = 'page__empty-container';
        // add click event listener
        emptyContainer.addEventListener('click', () => {
            console.log('close current page');
        });
        return emptyContainer;
    }
    /**
     *
     * content show page name
     *
     * @returns {HTMLParagraphElement}
     */
    get content() {
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
    get id() {
        return `page-${this.namespace}`;
    }
    /**
     *
     * Append current page skeleton into parent element
     *
     * @param parentElement {HTMLElement}
     */
    build(parentElement) {
        parentElement.appendChild(this.skeleton());
    }
}
exports.default = Page;

},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const page_1 = __importDefault(require("./layout/page"));
window.onload = () => {
    const app = new app_1.default('demo');
    app.build();
    (new page_1.default('hello')).build(app.element);
};

},{"./app/app":1,"./layout/page":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwL2FwcC50cyIsInNyYy90cy9sYXlvdXQvcGFnZS50cyIsInNyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFxQixHQUFHO0lBSXBCLFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSxRQUFRO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLEVBQUU7UUFDRixPQUFPLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLE9BQU87UUFDUCxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXBERCxzQkFvREM7Ozs7O0FDcEREOzs7O0dBSUc7QUFDSCxNQUFxQixJQUFJO0lBSXJCLFlBQVksU0FBaUI7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFFBQVE7UUFDWixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUV4Qix5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQVksZ0JBQWdCO1FBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7UUFFdkQsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFZLGNBQWM7UUFDdEIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxjQUFjLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBRW5ELDJCQUEyQjtRQUMzQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFZLE9BQU87UUFDZixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksRUFBRTtRQUNGLE9BQU8sUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLGFBQTBCO1FBQzVCLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBakdELHVCQWlHQzs7Ozs7Ozs7QUN0R0Qsb0RBQTRCO0FBQzVCLHlEQUFpQztBQUVqQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFWixDQUFDLElBQUksY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgLy8gdW5pcXVlIGFwcCBuYW1lIFxyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogYmFzaWMgYXBwIHNrZWxldG9uXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldCBza2VsZXRvbigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGFwcC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgYXBwLmNsYXNzTmFtZSA9ICdhcHAnO1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGFwcGVuZCBhcHAgc2tlbGV0b24gaW50byBkb20gYm9keVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5za2VsZXRvbilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogdW5pcXVlIGFwcCBpZFxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgYXBwLSR7dGhpcy5uYW1lfWBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogcXVlcnlTZWxlY3QgZm9yIGFwcFxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkhO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFxyXG4gKiBQYWdlIFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gICAgLy8gbmFtZXNwYWNlIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBpZCBmb3IgcGFnZVxyXG4gICAgcHJpdmF0ZSBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lc3BhY2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBwYWdlIHNrZWxldG9uXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNrZWxldG9uKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgcGFnZS5jbGFzc05hbWUgPSAncGFnZSc7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCBlbXB0eSBjb250YWluZXJcclxuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHRoaXMuZW1wdHlDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgY29udGVudCBjb250YWluZXJcclxuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBDb250ZW50IGNvbnRhaW5lclxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXQgY29udGVudENvbnRhaW5lcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ3BhZ2VfX2NvbnRlbnQtY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIGNvbnRlbnRcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBFbXB0eSBjb250YWluZXIgdG8gY2xvc2UgdGhlIHBhZ2VcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldCBlbXB0eUNvbnRhaW5lcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbXB0eUNvbnRhaW5lci5jbGFzc05hbWUgPSAncGFnZV9fZW1wdHktY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgZW1wdHlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSBjdXJyZW50IHBhZ2UnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gZW1wdHlDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGNvbnRlbnQgc2hvdyBwYWdlIG5hbWVcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxQYXJhZ3JhcGhFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldCBjb250ZW50KCk6IEhUTUxQYXJhZ3JhcGhFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ3BhZ2VfX2NvbnRlbnQnO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gYFBhZ2UgLSAke3RoaXMubmFtZXNwYWNlfWA7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgcGFnZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcGFnZS0ke3RoaXMubmFtZXNwYWNlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEFwcGVuZCBjdXJyZW50IHBhZ2Ugc2tlbGV0b24gaW50byBwYXJlbnQgZWxlbWVudCBcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBhcmVudEVsZW1lbnQge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBidWlsZChwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5za2VsZXRvbigpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBBcHAgZnJvbSBcIi4vYXBwL2FwcFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9sYXlvdXQvcGFnZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoJ2RlbW8nKTtcclxuICAgIGFwcC5idWlsZCgpO1xyXG5cclxuICAgIChuZXcgUGFnZSgnaGVsbG8nKSkuYnVpbGQoYXBwLmVsZW1lbnQpO1xyXG59Il19
