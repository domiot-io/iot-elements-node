'use strict';
const createHTMLIoTShelfElement = (window) => {
    return class HTMLIoTShelfElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTShelfElement; 