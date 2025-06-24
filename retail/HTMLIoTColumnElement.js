'use strict';
const createHTMLIoTColumnElement = (window) => {
    return class HTMLIoTColumnElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTColumnElement; 