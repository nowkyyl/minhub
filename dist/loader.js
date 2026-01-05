// ==UserScript==
// @name         Minhub
// @description  Minhub — Modpack for mope.io
// @author       now (disc: @110_111_119)
// @match        https://mope.io/*
// @run-at       document-start
// @grant        unsafeWindow
// @version      1.0.0
// ==/UserScript==

(function () {
    'use strict';

    const URL = "https://raw.githubusercontent.com/nowkyyl/minhub/refs/heads/main/dist/minhub.js"
    fetch(URL)
        .then(res => res.text())
        .then(code => {
            eval(code);
        })
        .catch(err => console.error("Failed to load Minhub:", err));
})();