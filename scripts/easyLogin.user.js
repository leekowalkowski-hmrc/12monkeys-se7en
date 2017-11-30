// ==UserScript==
// @name         Easy login
// @namespace    12monkeys-se7en
// @version      0.1
// @description  Login page has 'Enter employee number' as clear text, if it was a password field, you could use your password manager.
// @author       Lee Kowalkowski
// @match        https://*/*/DTX.NET/*Login.aspx
// @updateURL    https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/easyLogin.user.js
// @downloadURL  https://raw.githubusercontent.com/leekowalkowski-hmrc/12monkeys-se7en/master/scripts/easyLogin.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let loginField = document.querySelector('#txtEmployeeNumber');
    
    if(loginField) {
        loginField.type = 'password';
    }

    let message = document.querySelector('#lblMessage');

    if(message && /You are already logged into WebDTX/.test(message.textContent)) {
        location.href = location.href.replace('Login', 'Summary');
    }
})();