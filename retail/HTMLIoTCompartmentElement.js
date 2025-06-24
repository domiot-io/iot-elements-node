'use strict';
const createHTMLIoTCompartmentElement = (window) => {
    return class HTMLIoTCompartmentElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTCompartmentElement; 