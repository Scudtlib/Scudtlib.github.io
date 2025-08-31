// config.js（EndNote 版，覆蓋 course_Endnote/ 底下的 config.js）
(function () {
  // 這組是 Firebase 主控台 > 專案設定 > 你的應用程式的設定（Web）那一段
  const CFG = {
    apiKey: "AIzaSyCQpMR9Ito1uph76n4tRovkaqg9eQFeXb4",
    authDomain: "compustat-quiz.firebaseapp.com",
    projectId: "compustat-quiz",
    appId: "1:859358092703:web:3637d649afbf839eaa71aa"
    // 如果你未來需要，也可加上這些（非必要）：
    // storageBucket: "compustat-quiz.firebasestorage.app",
    // messagingSenderId: "859358092703",
    // measurementId: "G-5G7B8HD84F"
  };

  // 提供多種變數名，跟你的模板相容
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;

  // **很重要**：這個會決定 Firestore 路徑 artifacts/{appId}/...
  // 改成 EndNote 專用，不要跟 WOS 混在一起
  window.__app_id = "compustat-quiz-prod";

  // 如果沒用自定義登入，保持 null 走匿名登入
  window.__initial_auth_token = null;
})();
