'use strict';
const createHTMLIoTCubbyElement = (window) => {
    return class HTMLIoTCubbyElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTCubbyElement; 