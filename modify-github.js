// ==UserScript==
// @name           Modify the repository page of GitHub for screencast
// @namespace      http://tampermonkey.net/
// @version        2024-02-12
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
    document.title = document.title.replace(/^igrep\//, "mdn/");
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

    const targetBranches = document.querySelectorAll("a[title='igrep/translated-content:main'] > span");
    for (const targetBranch of targetBranches) {
      if (targetBranch.innerText === "igrep") {
        targetBranch.innerText = "mdn";
      }
    }
  }
  exec();

  setInterval(exec, 200);
})();
