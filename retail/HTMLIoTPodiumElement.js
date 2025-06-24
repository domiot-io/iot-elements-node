'use strict';
const createHTMLIoTPodiumElement = (window) => {
    return class HTMLIoTPodiumElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTPodiumElement; 