// config.js（EndNote 版，覆蓋 course_Endnote/ 底下的 config.js）
(function () {
  // 這組是 Firebase 主控台 > 專案設定 > 你的應用程式的設定（Web）那一段
  const CFG = {
    apiKey: "AIzaSyAGOV9xoSRP8_Omx2rseMOCxgPejln7tCs",
    authDomain: "wos-quiz2.firebaseapp.com",
    projectId: "wos-quiz2",
    appId: "1:529364696678:web:ed490aa83fb7f5d98e77a7"
    // 如果你未來需要，也可加上這些（非必要）：
    // storageBucket: "wos-quiz2.firebasestorage.app",
    // messagingSenderId: "529364696678",
    // measurementId: "G-2P6L8QZJKW"
  };

  // 提供多種變數名，跟你的模板相容
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;

  // **很重要**：這個會決定 Firestore 路徑 artifacts/{appId}/...
  // 改成 EndNote 專用，不要跟 WOS 混在一起
  window.__app_id = "wos-quiz2-prod";

  // 如果沒用自定義登入，保持 null 走匿名登入
  window.__initial_auth_token = null;
})();
