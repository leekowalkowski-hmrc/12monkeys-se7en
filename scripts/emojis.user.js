// ==UserScript==
// @name         summary emoji icons
// @namespace    12monkeys-se7en
// @version      0.2
// @description  use emojis for summary icons because reasons
// @author       You
// @match        https://*/DTX.NET/*Summary.aspx
// @match        http://*/DTX.NET/*Summary.aspx
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/emojis.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/emojis.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.querySelector("#SummarySaveButton").setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/save.png?raw=true");

    document.querySelector("#mmLnkAddTime").firstElementChild.setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/standard.png?raw=true");

    document.querySelector("#mmLnkAddTime2").firstElementChild.setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/overtime.png?raw=true");

    document.querySelector("#mmLnkAddOtherPayroll").firstElementChild.setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/call.png?raw=true");

    document.querySelector("#SummaryCopyButton").setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/copy.png?raw=true");

    document.querySelector("#SummaryPasteButton").setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/paste.png?raw=true");

    document.querySelector("#SummaryUndoButton").setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/undo.png?raw=true");

    document.querySelector("#SummaryDeleteButton").setAttribute("src", "https://github.com/leekowalkowski-hmrc/12monkeys-se7en/blob/master/images/delete.png?raw=true");

})();
