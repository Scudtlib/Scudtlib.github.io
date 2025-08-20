// config.js (相容版)
(function () {
  const CFG = {
    apiKey: "AIzaSyAtuavqeRz-THMItzfBSm-L-OCzDMIZMY",
    authDomain: "wos-quiz.firebaseapp.com",
    projectId: "wos-quiz",
    appId: "1:905547725730:web:34033c1008a11276b8d0fb"
  };
  // 供不同寫法存取
  window.__firebase_config = JSON.stringify(CFG); // 原本的
  window.__firebase_config_obj = CFG;             // 物件型
  window.firebaseConfig = CFG;                    // 常見寫法

  // Firestore 命名空間
  window.__app_id = "wos-quiz-prod";
  // 一般不需要，保持 null
  window.__initial_auth_token = null;
})();
