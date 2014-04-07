(function (win, doc) {
    'use strict';

    // References to the parent of the current subframe
    var parentWin = win.parent,
        parentDoc = parentWin.document,
        parentOrigin = parentWin.location.origin,
        // The element which the window is embedded into.
        iframeEl = win.frameElement,
        docEl = doc.documentElement,
        headEl = doc.head || doc.querySelector('head'),

        docWidth,
        docHeight,

        requestAnimationFrame = win.requestAnimationFrame ||
            win.webkitRequestAnimationFrame ||
            win.mozRequestAnimationFrame ||
            win.msRequestAnimationFrame ||
            win.oRequestAnimationFrame ||
            function (callback) {
                win.setTimeout(callback, 1000 / 30);
            };

    /**
     * Updates the size of the iframe element with the size of the document.
     * @todo Also check for the container size.
     * @todo Make it configurable.
     */
    (function fitToContent() {
        // Compare the current width of document with previous values.
        if (docWidth !== docEl.offsetWidth) {
            docWidth = docEl.offsetWidth;
            // Update the iframe element size from inside
            iframeEl.style.width = docWidth + 'px';
            // Send to parent
            parentWin.postMessage({
                'type': 'width',
                'value': docWidth
            }, parentOrigin);
        }

        // Compare the current height of document with previous values.
        if (docHeight !== docEl.offsetHeight) {
            docHeight = docEl.offsetHeight;
            // Update the iframe element size from inside
            iframeEl.style.height = docHeight + 'px';
            // Send to parent
            parentWin.postMessage({
                'type': 'height',
                'value': docHeight
            }, parentOrigin);
        }

        requestAnimationFrame(fitToContent);
    }());


    /**
     * Inherits <link> and <style> declarations from the parent document
     * @todo Make it configurable.
     */
    (function inheritStyleDeclarations() {
        var styleSheetList = parentDoc.querySelectorAll('link,style'),
            total = styleSheetList.length,
            i = 0;

        for (i; i < total; i += 1) {
            headEl.insertAdjacentHTML('beforeend', styleSheetList[i].outerHTML);
        }
    }());

    /**
     * Set the parent URL as base for relative anchors that no contains target=”_self”.
     * @todo Make it configurable.
     */
    (function insertBaseElement() {
        headEl.insertAdjacentHTML('beforeend', '<base href="' + parentWin.location.href + '" target="_parent"/>');
    }());

}(window, document));
