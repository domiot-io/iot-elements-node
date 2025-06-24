'use strict';
const createHTMLIoTEndcapElement = (window) => {
    return class HTMLIoTEndcapElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTEndcapElement; 