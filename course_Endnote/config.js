// config.js (相容版，請用這份覆蓋你 repo 裡的 config.js)
(function () {
  const CFG = {
    apiKey: "AIzaSyATuavqeRz-_THMtIzfBSm-L-OCzDMIZMY",
    authDomain: "wos-quiz.firebaseapp.com",
    projectId: "wos-quiz",
    appId: "1:905547725730:web:34033c1008a11276b8d0fb"
  };
  // 提供多種變數名，避免模板抓不到
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;
  window.__app_id = "wos-quiz-prod";
  window.__initial_auth_token = null;
})();
