'use strict';
const createHTMLIoTGondolaElement = (window) => {
    return class HTMLIoTGondolaElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTGondolaElement; 