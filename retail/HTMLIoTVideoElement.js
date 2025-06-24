'use strict';
const createHTMLIoTVideoElement = (window) => {
    return class HTMLIoTVideoElement extends window.HTMLElement {
        constructor() {
            super();
            
            // Internal state
            this._currentTime = 0;
            this._duration = 0;
            this._paused = true;
            this._ended = false;
            this._autoplay = false;
            this._loop = false;
        }

        /**
         * Gets the src attribute value.
         */
        get src() {
            return this.getAttribute('src') || '';
        }

        /**
         * Sets the src attribute value
         * This will trigger setAttribute("src", ...)
         * which can be monitored by bindings.
         */
        set src(value) {
            if (value) {
                this.setAttribute('src', value);
            } else {
                this.removeAttribute('src');
            }
        }

        /**
         * Gets the current playback time in seconds
         */
        get currentTime() {
            return this._currentTime;
        }

        /**
         * Sets the current playback time in seconds
         */
        set currentTime(value) {
            const newTime = Math.max(0, Math.min(value, this._duration || 0));
            if (this._currentTime !== newTime) {
                this._currentTime = newTime;
            }
        }

        /**
         * Gets whether the video is paused
         */
        get paused() {
            return this._paused;
        }

        /**
         * Gets/sets autoplay attribute
         */
        get autoplay() {
            return this._autoplay;
        }

        set autoplay(value) {
            this._autoplay = Boolean(value);
            if (value) {
                this.setAttribute('autoplay', '');
            } else {
                this.removeAttribute('autoplay');
            }
        }

        /**
         * Gets/sets loop attribute
         */
        get loop() {
            return this._loop;
        }

        set loop(value) {
            this._loop = Boolean(value);
            if (value) {
                this.setAttribute('loop', '');
            } else {
                this.removeAttribute('loop');
            }
        }

        /**
         * Loads the video
         * This method can be overridden by bindings
         * to send commands to devices.
         */
        load() {
            this._currentTime = 0;
            this._ended = false;
            this._duration = 20; // Default duration for video-sim
        }

        /**
         * Plays the video
         * This method can be overridden by bindings
         * to send commands to IoT devices.
         */
        play() {
            if (!this._paused) {
                return Promise.resolve();
            }

            this._paused = false;
            this._ended = false;
            
            return Promise.resolve();
        }

        /**
         * Pauses the video
         * This method can be overridden by bindings
         * to send commands to IoT devices.
         */
        pause() {
            if (this._paused) {
                return;
            }

            this._paused = true;
        }

        /**
         * Seeks to a specific time
         */
        seek(time) {
            this.currentTime = time;
        }
    };
};
export default createHTMLIoTVideoElement;
