'use strict';
const createHTMLIoTLineElement = (window) => {
    return class HTMLIoTLineElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTLineElement; 