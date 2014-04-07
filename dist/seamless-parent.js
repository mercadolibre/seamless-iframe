(function (win, doc) {
    'use strict';

    // Provide support for Internet Explorer versions prior to IE 9.
    var on = win.addEventListener || win.attachEvent,
        MESSAGE = (on === win.attachEvent) ? 'onmessage' : 'message';

    /**
     * A fallback that emulates the main features of the seamless iframe.
     * @param {Element} iframeElement The iframe where apply the fallback.
     * @todo Don't depend on jQuery/Zepto to trigger custom events.
     */
    function Seamless(iframeElement) {
        on(MESSAGE, function (event) {
            win.$(iframeElement).trigger(event.data.type, event.data.value);
        });
    }

    // Export
    win.Seamless = Seamless;

    (function init() {
        var iframesList = doc.querySelectorAll('[seamless]'),
            total = iframesList.length,
            i = 0;

        for (i; i < total; i += 1) {
            new Seamless(iframesList[i]);
        }
    }());

}(window, document));
