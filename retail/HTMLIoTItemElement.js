'use strict';
const createHTMLIoTItemElement = (window) => {
    return class HTMLIoTItemElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTItemElement; 