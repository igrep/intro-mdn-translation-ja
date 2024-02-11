// ==UserScript==
// @name           Modify the repository page of GitHub for screencast
// @namespace      http://tampermonkey.net/
// @version        2024-02-11
// @downloadURL    https://raw.githubusercontent.com/igrep/intro-mdn-translation-ja/main/modify-github.js
// @updateURL      https://raw.githubusercontent.com/igrep/intro-mdn-translation-ja/main/modify-github.js
// @description    Modify the repository page of GitHub for screencast
// @author         igrep
// @match          https://github.com/igrep/translated-content
// @match          https://github.com/igrep/translated-content/*
// @grant          none
// ==/UserScript==

(() => {
  function exec() {
    const appHeaderContextItemLabel = document.querySelector(".AppHeader-context-item .AppHeader-context-item-label");
    if (appHeaderContextItemLabel !== null) {
      appHeaderContextItemLabel.innerText = "mdn";
    }

    const avatarUser = document.querySelector("img.avatar-user");
    if (avatarUser !== null) {
      avatarUser.src = "https://avatars.githubusercontent.com/u/7565578?s=48&v=4";
    }

    const forkedFrom = document.querySelector("div.d-none");
    if (forkedFrom !== null) {
      forkedFrom.parentElement.removeChild(forkedFrom);
    }

    const thisBranchIs = document.querySelector(".vhgA");
    if (thisBranchIs !== null) {
      thisBranchIs.parentElement.removeChild(thisBranchIs);
    }
  }
  exec();

  setInterval(exec, 500);
})();
