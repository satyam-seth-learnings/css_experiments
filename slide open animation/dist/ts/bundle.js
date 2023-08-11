(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const events_1 = require("../common/events");
/**
 *
 * App
 *
 */
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
        // append page button
        app.appendChild(this.openPageButton);
        return app;
    }
    /**
     *
     * button to open new page
     *
     * @returns {HTMLButtonElement}
     *
     */
    get openPageButton() {
        const button = document.createElement('button');
        button.className = 'open-page-btn';
        button.innerText = 'Open New Page';
        // add click event listener
        button.addEventListener('click', () => {
            console.log(`opening new page - app name -> ${this.name}`);
            window.dispatchEvent(events_1.openNewPageEvent);
        });
        return button;
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
    /**
     *
     * append app skeleton into dom body
     *
     */
    build() {
        document.body.appendChild(this.skeleton);
    }
}
exports.App = App;

},{"../common/events":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openNewPageEvent = exports.OPEN_NEW_PAGE_EVENT = void 0;
// event name for open new page
exports.OPEN_NEW_PAGE_EVENT = 'open-new-page-event';
// event to open new page
exports.openNewPageEvent = new Event(exports.OPEN_NEW_PAGE_EVENT);

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const page_1 = require("../layout/page");
/**
 *
 * Utilities
 *
 */
class Utils {
    /**
     *
     * generate unique namespace string for given length
     *
     * @param length {number} - length of namespace
     *
     * @returns {string}
     */
    static makeRandomNamespace(length) {
        let result = '';
        let counter = 0;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    /**
     *
     * build new page
     *
     * @param parentElement {HTMLElement} - parent element for build
     *
     */
    static buildPage(parentElement) {
        const namespace = Utils.makeRandomNamespace(10);
        const page = new page_1.Page({ namespace });
        page.build(parentElement);
    }
}
exports.Utils = Utils;

},{"../layout/page":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const events_1 = require("../common/events");
/**
 *
 * Page
 *
 */
class Page {
    constructor(config) {
        this.config = config;
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
    get emptyContainer() {
        const emptyContainer = document.createElement('div');
        emptyContainer.className = 'page__empty-container';
        // add click event listener
        emptyContainer.addEventListener('click', () => {
            console.log(`closing current page - namespace -> ${this.config.namespace}`);
            this.destroy();
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
    get openPageButton() {
        const button = document.createElement('button');
        button.className = 'open-page-btn';
        button.innerText = 'Open New Page';
        // add click event listener
        button.addEventListener('click', () => {
            console.log(`opening new page - namespace -> ${this.config.namespace}`);
            window.dispatchEvent(events_1.openNewPageEvent);
        });
        return button;
    }
    /**
     *
     * Unique id for page
     *
     * @returns {string}
     *
     */
    get id() {
        return `page-${this.config.namespace}`;
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
    /**
     *
     * Remove page skeleton from dom
     *
     */
    destroy() {
        this.element.remove();
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
exports.Page = Page;

},{"../common/events":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const utils_1 = require("./common/utils");
const events_1 = require("./common/events");
window.onload = () => {
    // build app
    const app = new app_1.App('demo');
    app.build();
    // Add event to open page
    window.addEventListener(events_1.OPEN_NEW_PAGE_EVENT, () => utils_1.Utils.buildPage(app.element));
};

},{"./app/app":1,"./common/events":2,"./common/utils":3}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwL2FwcC50cyIsInNyYy90cy9jb21tb24vZXZlbnRzLnRzIiwic3JjL3RzL2NvbW1vbi91dGlscy50cyIsInNyYy90cy9sYXlvdXQvcGFnZS50cyIsInNyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUEsNkNBQW9EO0FBRXBEOzs7O0dBSUc7QUFDSCxNQUFhLEdBQUc7SUFJWixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQVksUUFBUTtRQUNoQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV0QixxQkFBcUI7UUFDckIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxjQUFjO1FBQ2QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNuQyxNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUVuQywyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDO1FB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QUM7WUFDeEUsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksRUFBRTtRQUNGLE9BQU8sUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLE9BQU87UUFDUCxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssT0FBTztRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLGFBQTBCO1FBQzVCLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBL0lELG9CQStJQzs7Ozs7QUN2SkQsbUNBQWdDO0FBQ2hDLDBDQUF1QztBQUN2Qyw0Q0FBc0Q7QUFFdEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDakIsWUFBWTtJQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVaLHlCQUF5QjtJQUN6QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsNEJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBvcGVuTmV3UGFnZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9ldmVudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBcclxuICogQXBwXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICAvLyB1bmlxdWUgYXBwIG5hbWUgXHJcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBiYXNpYyBhcHAgc2tlbGV0b25cclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0IHNrZWxldG9uKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgYXBwLmlkID0gdGhpcy5pZDtcclxuICAgICAgICBhcHAuY2xhc3NOYW1lID0gJ2FwcCc7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCBwYWdlIGJ1dHRvblxyXG4gICAgICAgIGFwcC5hcHBlbmRDaGlsZCh0aGlzLm9wZW5QYWdlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogYnV0dG9uIHRvIG9wZW4gbmV3IHBhZ2VcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldCBvcGVuUGFnZUJ1dHRvbigpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdvcGVuLXBhZ2UtYnRuJztcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ09wZW4gTmV3IFBhZ2UnO1xyXG5cclxuICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvcGVuaW5nIG5ldyBwYWdlIC0gYXBwIG5hbWUgLT4gJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG9wZW5OZXdQYWdlRXZlbnQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIHVuaXF1ZSBhcHAgaWRcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYGFwcC0ke3RoaXMubmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIHF1ZXJ5U2VsZWN0IGZvciBhcHBcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpITtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogYXBwZW5kIGFwcCBza2VsZXRvbiBpbnRvIGRvbSBib2R5XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNrZWxldG9uKVxyXG4gICAgfVxyXG59IiwiLy8gZXZlbnQgbmFtZSBmb3Igb3BlbiBuZXcgcGFnZVxyXG5leHBvcnQgY29uc3QgT1BFTl9ORVdfUEFHRV9FVkVOVCA9ICdvcGVuLW5ldy1wYWdlLWV2ZW50JztcclxuXHJcbi8vIGV2ZW50IHRvIG9wZW4gbmV3IHBhZ2VcclxuZXhwb3J0IGNvbnN0IG9wZW5OZXdQYWdlRXZlbnQgPSBuZXcgRXZlbnQoT1BFTl9ORVdfUEFHRV9FVkVOVCk7IiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9sYXlvdXQvcGFnZVwiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBVdGlsaXRpZXNcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGdlbmVyYXRlIHVuaXF1ZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciBnaXZlbiBsZW5ndGhcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCB7bnVtYmVyfSAtIGxlbmd0aCBvZiBuYW1lc3BhY2VcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1ha2VSYW5kb21OYW1lc3BhY2UobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGJ1aWxkIG5ldyBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwYXJlbnRFbGVtZW50IHtIVE1MRWxlbWVudH0gLSBwYXJlbnQgZWxlbWVudCBmb3IgYnVpbGRcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYnVpbGRQYWdlKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmFtZXNwYWNlID0gVXRpbHMubWFrZVJhbmRvbU5hbWVzcGFjZSgxMCk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHsgbmFtZXNwYWNlIH0pO1xyXG4gICAgICAgIHBhZ2UuYnVpbGQocGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBvcGVuTmV3UGFnZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9ldmVudHNcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZyB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBcclxuICogUGFnZSBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnZSB7XHJcbiAgICAvLyBwYWdlIGNvbmZpZ3VyYXRpb25cclxuICAgIHByaXZhdGUgY29uZmlnOiBQYWdlQ29uZmlnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFBhZ2VDb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogcGFnZSBza2VsZXRvblxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2UuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHBhZ2UuY2xhc3NOYW1lID0gJ3BhZ2UnO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgZW1wdHkgY29udGFpbmVyXHJcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0aGlzLmVtcHR5Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIGNvbnRlbnQgY29udGFpbmVyXHJcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQ29udGVudCBjb250YWluZXJcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0IGNvbnRlbnRDb250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwYWdlX19jb250ZW50LWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCBjb250ZW50XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgcGFnZSBidXR0b25cclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlblBhZ2VCdXR0b24pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogRW1wdHkgY29udGFpbmVyIHRvIGNsb3NlIHRoZSBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXQgZW1wdHlDb250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW1wdHlDb250YWluZXIuY2xhc3NOYW1lID0gJ3BhZ2VfX2VtcHR5LWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIC8vIGFkZCBjbGljayBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGVtcHR5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2xvc2luZyBjdXJyZW50IHBhZ2UgLSBuYW1lc3BhY2UgLT4gJHt0aGlzLmNvbmZpZy5uYW1lc3BhY2V9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBlbXB0eUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogY29udGVudCBzaG93IHBhZ2UgbmFtZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTFBhcmFncmFwaEVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0IGNvbnRlbnQoKTogSFRNTFBhcmFncmFwaEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmNsYXNzTmFtZSA9ICdwYWdlX19jb250ZW50JztcclxuICAgICAgICBjb250ZW50RWxlbWVudC5pbm5lclRleHQgPSBgUGFnZSAtICR7dGhpcy5jb25maWcubmFtZXNwYWNlfWA7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBidXR0b24gdG8gb3BlbiBuZXcgcGFnZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IG9wZW5QYWdlQnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ29wZW4tcGFnZS1idG4nO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnT3BlbiBOZXcgUGFnZSc7XHJcblxyXG4gICAgICAgIC8vIGFkZCBjbGljayBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYG9wZW5pbmcgbmV3IHBhZ2UgLSBuYW1lc3BhY2UgLT4gJHt0aGlzLmNvbmZpZy5uYW1lc3BhY2V9YCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG9wZW5OZXdQYWdlRXZlbnQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIFVuaXF1ZSBpZCBmb3IgcGFnZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgcGFnZS0ke3RoaXMuY29uZmlnLm5hbWVzcGFjZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBxdWVyeVNlbGVjdCBmb3IgYXBwXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIFJlbW92ZSBwYWdlIHNrZWxldG9uIGZyb20gZG9tXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQXBwZW5kIGN1cnJlbnQgcGFnZSBza2VsZXRvbiBpbnRvIHBhcmVudCBlbGVtZW50IFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50RWxlbWVudCB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNrZWxldG9uKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwL2FwcFwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBPUEVOX05FV19QQUdFX0VWRU5UIH0gZnJvbSBcIi4vY29tbW9uL2V2ZW50c1wiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIC8vIGJ1aWxkIGFwcFxyXG4gICAgY29uc3QgYXBwID0gbmV3IEFwcCgnZGVtbycpO1xyXG4gICAgYXBwLmJ1aWxkKCk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IHRvIG9wZW4gcGFnZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoT1BFTl9ORVdfUEFHRV9FVkVOVCwgKCkgPT4gVXRpbHMuYnVpbGRQYWdlKGFwcC5lbGVtZW50KSk7XHJcbn0iXX0=
