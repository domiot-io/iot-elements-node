'use strict';
const createHTMLIoTTileElement = (window) => {
    return class HTMLIoTTileElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTTileElement; 