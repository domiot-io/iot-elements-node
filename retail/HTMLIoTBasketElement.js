'use strict';
const createHTMLIoTBasketElement = (window) => {
    return class HTMLIoTBasketElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTBasketElement; 