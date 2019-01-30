// ==UserScript==
// @name         standard time shortcut
// @namespace    12monkeys-se7en
// @version      0.3
// @description  add a shortcut for standard time in uk
// @author       You
// @match        https://*/DTX.NET/*Summary.aspx
// @match        https://*/*/DTX.NET/*Summary.aspx
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/linkToDTX.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/linkToDTX.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var table = document.querySelector('#menuBar');
    var clone = table.firstElementChild.firstElementChild.firstElementChild.cloneNode(true);
    var elem = table.firstElementChild.firstElementChild.firstElementChild;

    var aTags = document.getElementsByTagName("a");
    var searchText = "Standard Time in UK";
    var found;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
            found = aTags[i];
            break;
        }
    }

    clone.setAttribute("id", "tdStandardTimeUK");
    clone.firstElementChild.setAttribute("href", found.getAttribute("href"));
    clone.firstElementChild.setAttribute("onclick", found.getAttribute("onclick"));
    clone.firstElementChild.setAttribute("id", "MainMenuUC1_lnkbtnStandardTimeUK");
    clone.firstElementChild.textContent = "Standard Time in UK";

    table.firstElementChild.firstElementChild.insertBefore(clone, elem);

})();