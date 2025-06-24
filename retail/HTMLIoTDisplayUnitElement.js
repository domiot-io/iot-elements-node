'use strict';
const createHTMLIoTDisplayUnitElement = (window) => {
    return class HTMLIoTDisplayUnitElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTDisplayUnitElement; 