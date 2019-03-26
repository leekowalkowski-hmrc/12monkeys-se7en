// ==UserScript==
// @name         Browser Compatibility
// @namespace    12monkeys-se7en
// @version      0.9
// @description  Fix browser compatibility issues
// @author       Lee Kowalkowski, Ian Ralphs, Alex Fisher
// @match        https://*/DTX.NET/*
// @match        https://*/*/DTX.NET/*
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

    // Submit holidays - prevent incorrect heights covering submit button
    var div = document.getElementById('dgHolidaySubmitClaims_div');
    if(div){
        div.style.height = 'auto';
        div.parentElement.style.height = 'auto';
    }

    window.igtbl_adjustNNHeight = function(){};

    // Submit claims - fill in missing legacy IE methods
    Element.prototype.selectSingleNode = function(xpath) {
        var newXpath = xpath.replace(/\[(\d+)\]/g, function(match, number) {
            return "[" + (parseInt(number)+1) + "]";
        });
        var nodes = this.ownerDocument.evaluate(newXpath, this);
        return nodes.iterateNext();
    };

    Element.prototype.selectNodes = function(xpath) {
        var results = [];
        var result;
        var nodes = this.ownerDocument.evaluate(xpath, this, null);
        while (result = nodes.iterateNext()) {
            results.push(result);
        }
        return results;
    };

    Object.defineProperty(Element.prototype, 'text', {
        set: function(value){this.textContent = value;},
        get: function(){return this.textContent;}
    });

    Object.defineProperty(Attr.prototype, 'text', {
        get: function(){return this.value;}
    });

    Object.defineProperty(XMLDocument.prototype, 'xml', {
        get: function(){return this.documentElement.outerHTML;}
    });
})();