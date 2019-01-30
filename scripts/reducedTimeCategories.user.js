// ==UserScript==
// @name         Reduced Time Categories
// @namespace    12monkeys-se7en
// @version      0.5
// @description  Reduced time category options in dropdowns
// @author       Ian Ralphs
// @match        https://*/DTX.NET/*
// @match        https://*/*/DTX.NET/*
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/reducedTimeCategories.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/reducedTimeCategories.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    window.addEventListener('load', function () {

        let summaryTimeCategories = [
            "Forecast Time",
            "Standard Time in UK"
        ];

        let summaryTime2Categories = [
            "ASPIRE Overtime Flat Rate",
            "ASPIRE Overtime Double Time",
            "ASPIRE Overtime Time and a Half"
        ];

        let summary_OtherPayroll = [
            "ASPIRE Call Out (Inconvenience Payment)",
            "ASPIRE On Call (Public Holidays)",
            "ASPIRE On Call (Standard)"
        ];

        document.querySelectorAll("#summary_Time li").forEach(element => {
            if (summaryTimeCategories.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

        document.querySelectorAll("#summary_Time2 li").forEach(element => {
            if (summaryTime2Categories.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

        document.querySelectorAll("[id='summary_Other Payroll'] li").forEach(element => {
            if (summary_OtherPayroll.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

        document.querySelectorAll("#item_Time li").forEach(element => {
            if (summaryTimeCategories.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

        document.querySelectorAll("#item_Time2 li").forEach(element => {
            if (summaryTime2Categories.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

        document.querySelectorAll("[id='item_Other Payroll'] li").forEach(element => {
            if (summary_OtherPayroll.indexOf(element.textContent) == -1) {
                element.style.display = "none";
            }
        });

    });
})();
