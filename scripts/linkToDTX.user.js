// ==UserScript==
// @name         Link to DTX
// @namespace    12monkeys-se7en
// @version      0.4
// @description  Put a link to DTX on Talent Homepage
// @author       Lee Kowalkowski
// @match        https://*/uk
// @match        https://*/*/uk
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/linkToDTX.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/linkToDTX.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let linkToTimesheet = document.createElement('a');
    if(window.CSCO_WebVPN) {
        linkToTimesheet.href = window.CSCO_WebVPN.mangle_url("https://missbhadtx03.corp.capgemini.com/DTX.NET/", 0);
    } else {
        linkToTimesheet.href = "https://missbhadtx03.corp.capgemini.com/DTX.NET/";
    }
    linkToTimesheet.textContent = 'do your timesheet';

    let editProfileLink = document.querySelector('[title^="Edit profile"]');

    if (editProfileLink) {
        let parent = editProfileLink.parentNode;
        parent.appendChild(document.createTextNode(' | '));
        parent.appendChild(linkToTimesheet);
    }
})();