// ==UserScript==
// @name         Browser Compatibility
// @namespace    12monkeys-se7en
// @version      0.4
// @description  Fix browser compatibility issues
// @author       Lee Kowalkowski, Ian Ralphs
// @match        https://*/*/DTX.NET/*
// @match        http://*/DTX.NET/*
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/fixBrowserCompatibilityIssues.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/fixBrowserCompatibilityIssues.user.js
// @resource     CSS https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/styles/fix.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
    'use strict';

    var cssTxt = GM_getResourceText("CSS");
    GM_addStyle(cssTxt);

    document.querySelectorAll("[onpropertychange]").forEach(element => {
        element.setAttribute('onchange', element.getAttribute('onpropertychange'));
        element.removeAttribute('onpropertychange');
    });

    document.querySelectorAll("[name]:not([id])").forEach(element => {
        element.id = element.name;
    });
})();