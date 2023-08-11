(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            window.dispatchEvent(events_1.pageOpenEvent);
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
exports.default = App;

},{"../common/events":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageOpenEvent = exports.OPEN_NEW_PAGE_EVENT = void 0;
exports.OPEN_NEW_PAGE_EVENT = 'open-new-page-event';
exports.pageOpenEvent = new Event(exports.OPEN_NEW_PAGE_EVENT);

},{}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = __importDefault(require("../app/app"));
exports.app = new app_1.default('demo');

},{"../app/app":1}],4:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../layout/page"));
class Util {
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
        const namespace = Util.makeRandomNamespace(10);
        const page = new page_1.default({ namespace });
        page.build(parentElement);
    }
}
exports.default = Util;

},{"../layout/page":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            window.dispatchEvent(events_1.pageOpenEvent);
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
     * Append current page skeleton into parent element
     *
     * @param parentElement {HTMLElement}
     */
    build(parentElement) {
        parentElement.appendChild(this.skeleton());
    }
}
exports.default = Page;

},{"../common/events":2}],6:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./common/events");
const instances_1 = require("./common/instances");
const utils_1 = __importDefault(require("./common/utils"));
window.onload = () => {
    // build app
    instances_1.app.build();
    // Add event to open page
    window.addEventListener(events_1.OPEN_NEW_PAGE_EVENT, () => utils_1.default.buildPage(instances_1.app.element));
};

},{"./common/events":2,"./common/instances":3,"./common/utils":4}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwL2FwcC50cyIsInNyYy90cy9jb21tb24vZXZlbnRzLnRzIiwic3JjL3RzL2NvbW1vbi9pbnN0YW5jZXMudHMiLCJzcmMvdHMvY29tbW9uL3V0aWxzLnRzIiwic3JjL3RzL2xheW91dC9wYWdlLnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDZDQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsTUFBcUIsR0FBRztJQUlwQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQVksUUFBUTtRQUNoQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV0QixxQkFBcUI7UUFDckIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxjQUFjO1FBQ2QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNuQyxNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUVuQywyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxzQkFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsT0FBTyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxPQUFPO1FBQ1AsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUs7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUNKO0FBN0VELHNCQTZFQzs7Ozs7O0FDcEZZLFFBQUEsbUJBQW1CLEdBQUcscUJBQXFCLENBQUE7QUFFM0MsUUFBQSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsMkJBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7O0FDRjVELHFEQUE2QjtBQUVoQixRQUFBLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7QUNGbkMsMERBQWtDO0FBRWxDLE1BQXFCLElBQUk7SUFDckI7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFjO1FBQ3JDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxVQUFVLEdBQUcsZ0VBQWdFLENBQUM7UUFDcEYsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRTNDLE9BQU8sT0FBTyxHQUFHLE1BQU0sRUFBRTtZQUNyQixNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDMUUsT0FBTyxJQUFJLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQTBCO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFsQ0QsdUJBa0NDOzs7OztBQ3BDRCw2Q0FBc0U7QUFHdEU7Ozs7R0FJRztBQUNILE1BQXFCLElBQUk7SUFLckIsWUFBWSxNQUFrQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssUUFBUTtRQUNaLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBRXhCLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0QywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSxnQkFBZ0I7UUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUV2RCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxxQkFBcUI7UUFDckIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRCxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQVksY0FBYztRQUN0QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELGNBQWMsQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFFbkQsMkJBQTJCO1FBQzNCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQVksT0FBTztRQUNmLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsY0FBYyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDM0MsY0FBYyxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksY0FBYztRQUNkLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFFbkMsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUN4RSxNQUFNLENBQUMsYUFBYSxDQUFDLHNCQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLEVBQUU7UUFDRixPQUFPLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0gsSUFBSSxPQUFPO1FBQ1AsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsYUFBMEI7UUFDNUIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUF0SUQsdUJBc0lDOzs7Ozs7OztBQzlJRCw0Q0FBc0Q7QUFDdEQsa0RBQXlDO0FBQ3pDLDJEQUFrQztBQUVsQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNqQixZQUFZO0lBQ1osZUFBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRVoseUJBQXlCO0lBQ3pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBbUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFJLENBQUMsU0FBUyxDQUFDLGVBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IHBhZ2VPcGVuRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2V2ZW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBBcHBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgLy8gdW5pcXVlIGFwcCBuYW1lIFxyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogYmFzaWMgYXBwIHNrZWxldG9uXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldCBza2VsZXRvbigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGFwcC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgYXBwLmNsYXNzTmFtZSA9ICdhcHAnO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgcGFnZSBidXR0b25cclxuICAgICAgICBhcHAuYXBwZW5kQ2hpbGQodGhpcy5vcGVuUGFnZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGJ1dHRvbiB0byBvcGVuIG5ldyBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH1cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBnZXQgb3BlblBhZ2VCdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnb3Blbi1wYWdlLWJ0bic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdPcGVuIE5ldyBQYWdlJztcclxuXHJcbiAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgb3BlbmluZyBuZXcgcGFnZSAtIGFwcCBuYW1lIC0+ICR7dGhpcy5uYW1lfWApO1xyXG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChwYWdlT3BlbkV2ZW50KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiB1bmlxdWUgYXBwIGlkXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBhcHAtJHt0aGlzLm5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBxdWVyeVNlbGVjdCBmb3IgYXBwXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGFwcGVuZCBhcHAgc2tlbGV0b24gaW50byBkb20gYm9keVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5za2VsZXRvbilcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBPUEVOX05FV19QQUdFX0VWRU5UID0gJ29wZW4tbmV3LXBhZ2UtZXZlbnQnXHJcblxyXG5leHBvcnQgY29uc3QgcGFnZU9wZW5FdmVudCA9IG5ldyBFdmVudChPUEVOX05FV19QQUdFX0VWRU5UKTsiLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9hcHAvYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwID0gbmV3IEFwcCgnZGVtbycpOyIsImltcG9ydCBQYWdlIGZyb20gXCIuLi9sYXlvdXQvcGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogZ2VuZXJhdGUgdW5pcXVlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIGdpdmVuIGxlbmd0aFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIHtudW1iZXJ9IC0gbGVuZ3RoIG9mIG5hbWVzcGFjZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWFrZVJhbmRvbU5hbWVzcGFjZShsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogYnVpbGQgbmV3IHBhZ2VcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBhcmVudEVsZW1lbnQge0hUTUxFbGVtZW50fSAtIHBhcmVudCBlbGVtZW50IGZvciBidWlsZFxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBidWlsZFBhZ2UocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuYW1lc3BhY2UgPSBVdGlsLm1ha2VSYW5kb21OYW1lc3BhY2UoMTApO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSh7IG5hbWVzcGFjZSB9KTtcclxuICAgICAgICBwYWdlLmJ1aWxkKHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT1BFTl9ORVdfUEFHRV9FVkVOVCwgcGFnZU9wZW5FdmVudCB9IGZyb20gXCIuLi9jb21tb24vZXZlbnRzXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWcgfSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG4vKipcclxuICogXHJcbiAqIFBhZ2UgXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICAvLyBwYWdlIGNvbmZpZ3VyYXRpb25cclxuICAgIHByaXZhdGUgY29uZmlnOiBQYWdlQ29uZmlnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFBhZ2VDb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogcGFnZSBza2VsZXRvblxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2UuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHBhZ2UuY2xhc3NOYW1lID0gJ3BhZ2UnO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgZW1wdHkgY29udGFpbmVyXHJcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0aGlzLmVtcHR5Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIGNvbnRlbnQgY29udGFpbmVyXHJcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQ29udGVudCBjb250YWluZXJcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0IGNvbnRlbnRDb250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwYWdlX19jb250ZW50LWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCBjb250ZW50XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgcGFnZSBidXR0b25cclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlblBhZ2VCdXR0b24pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogRW1wdHkgY29udGFpbmVyIHRvIGNsb3NlIHRoZSBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXQgZW1wdHlDb250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW1wdHlDb250YWluZXIuY2xhc3NOYW1lID0gJ3BhZ2VfX2VtcHR5LWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIC8vIGFkZCBjbGljayBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGVtcHR5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2xvc2luZyBjdXJyZW50IHBhZ2UgLSBuYW1lc3BhY2UgLT4gJHt0aGlzLmNvbmZpZy5uYW1lc3BhY2V9YCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGVtcHR5Q29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBjb250ZW50IHNob3cgcGFnZSBuYW1lXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MUGFyYWdyYXBoRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXQgY29udGVudCgpOiBIVE1MUGFyYWdyYXBoRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29udGVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ3BhZ2VfX2NvbnRlbnQnO1xyXG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmlubmVyVGV4dCA9IGBQYWdlIC0gJHt0aGlzLmNvbmZpZy5uYW1lc3BhY2V9YDtcclxuICAgICAgICByZXR1cm4gY29udGVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIGJ1dHRvbiB0byBvcGVuIG5ldyBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH1cclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBnZXQgb3BlblBhZ2VCdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnb3Blbi1wYWdlLWJ0bic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdPcGVuIE5ldyBQYWdlJztcclxuXHJcbiAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgb3BlbmluZyBuZXcgcGFnZSAtIG5hbWVzcGFjZSAtPiAke3RoaXMuY29uZmlnLm5hbWVzcGFjZX1gKTtcclxuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQocGFnZU9wZW5FdmVudCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogVW5pcXVlIGlkIGZvciBwYWdlXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBwYWdlLSR7dGhpcy5jb25maWcubmFtZXNwYWNlfWA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBxdWVyeVNlbGVjdCBmb3IgYXBwXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEFwcGVuZCBjdXJyZW50IHBhZ2Ugc2tlbGV0b24gaW50byBwYXJlbnQgZWxlbWVudCBcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBhcmVudEVsZW1lbnQge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBidWlsZChwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5za2VsZXRvbigpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE9QRU5fTkVXX1BBR0VfRVZFTlQgfSBmcm9tIFwiLi9jb21tb24vZXZlbnRzXCI7XHJcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2NvbW1vbi9pbnN0YW5jZXNcIjtcclxuaW1wb3J0IFV0aWwgZnJvbSBcIi4vY29tbW9uL3V0aWxzXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgLy8gYnVpbGQgYXBwXHJcbiAgICBhcHAuYnVpbGQoKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgdG8gb3BlbiBwYWdlXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihPUEVOX05FV19QQUdFX0VWRU5ULCAoKSA9PiBVdGlsLmJ1aWxkUGFnZShhcHAuZWxlbWVudCkpO1xyXG59Il19
