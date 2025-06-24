'use strict';
const createHTMLIoTCustomerElement = (window) => {
    return class HTMLIoTCustomerElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTCustomerElement; 