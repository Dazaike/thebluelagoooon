// ==UserScript==
// @name         Auto Ad Blocker
// @namespace    https://cybar.xyz/
// @version      1.0
// @description  blocks the awkward ads
// @author       You
// @match        *://*/*
// @run-at       document-start
// @license MIT
// @grant        none
// ==/UserScript==

(function() {
    document.cookie = "ads=off; path=/; max-age=" + Number.MAX_SAFE_INTEGER;
})();
