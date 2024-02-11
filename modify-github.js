// ==UserScript==
// @name           Modify the repository page of GitHub for screencast
// @namespace      http://tampermonkey.net/
// @version        2024-02-11
// @downloadURL    https://gist.githubusercontent.com/UnicodeError0041/b5a43f278027007cc3efb6623f68358b/raw/neptun-mark-my-professor-ratings.js
// @updateURL    https://gist.githubusercontent.com/UnicodeError0041/b5a43f278027007cc3efb6623f68358b/raw/neptun-mark-my-professor-ratings.js
// @description    Modify the repository page of GitHub for screencast
// @author         igrep
// @match        https://github.com/igrep/translated-content/*
// @grant          none
// ==/UserScript==

(() => {
  document.querySelector(".AppHeader-context-item .AppHeader-context-item-label").innerText = "mdn";

  document.querySelector("img.avatar-user").src = "https://avatars.githubusercontent.com/u/7565578?s=48&v=4";

  const forkedFrom = document.querySelector("div.d-none");
  forkedFrom.parentElement.removeChild(forkedFrom);

  const thisBranchIs = document.querySelector(".vhgA");
  thisBranchIs.parentElement.removeChild(thisBranchIs);
})();
