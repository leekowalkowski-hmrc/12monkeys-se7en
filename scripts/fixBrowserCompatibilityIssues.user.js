// ==UserScript==
// @name         Browser Compatibility
// @namespace    12monkeys-se7en
// @version      0.1
// @description  Fix browser compatibility issues
// @author       Lee Kowalkowski, Ian Ralphs
// @match        https://*/*/DTX.NET/*
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/fixBrowserCompatibilityIssues.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/fixBrowserCompatibilityIssues.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("[onpropertychange]").forEach(element => {
        element.setAttribute('onchange', element.getAttribute('onpropertychange'));
        element.removeAttribute('onpropertychange');
    });


})();