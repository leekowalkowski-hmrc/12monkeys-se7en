// ==UserScript==
// @name         DTX Auto Fill
// @namespace    12monkeys-se7en
// @version      0.1
// @description  Just fill all weekdays with 7.5 (With the click of a button in the toolbar)
// @author       Lee Kowalkowski
// @match        https://*/DTX.NET/*item.aspx*
// @match        https://*/*/DTX.NET/*item.aspx*
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/autoFill.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/autoFill.user.js
// ==/UserScript==

(function() {
    'use strict';

    var toolbar = document.querySelector('#SubMenuUC1_SubMenu_div1 tr');
    var menuItem = document.createElement('td');
    var button = document.createElement('button');
    button.innerText = '7.5';
    button.onclick = function() {
        var calendar = document.getElementById('calDates_tabCalendar');
        var dayFields = calendar.querySelectorAll('td:nth-child(1)>input,td:nth-child(2)>input,td:nth-child(3)>input,td:nth-child(4)>input,td:nth-child(5)>input');
        dayFields.forEach(function(dayfield){dayfield.value = '7.5'});
    };
    menuItem.appendChild(button);
    toolbar.appendChild(menuItem);
})();