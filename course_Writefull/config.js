// config.js（EndNote 版，覆蓋 course_Endnote/ 底下的 config.js）
(function () {
  // 這組是 Firebase 主控台 > 專案設定 > 你的應用程式的設定（Web）那一段
  const CFG = {
    apiKey: "AIzaSyDUKkKqEnpFJojxfyMOKjGmpheQH8ugys4",
    authDomain: "writefull-quiz.firebaseapp.com",
    projectId: "writefull-quiz",
    appId: "1:932865765509:web:a27f158d5432f3e3ea79ec"
    // 如果你未來需要，也可加上這些（非必要）：
    // storageBucket: "writefull-quiz.firebasestorage.app",
    // messagingSenderId: "932865765509",
    // measurementId: "G-JJVKY5Y70W"
  };

  // 提供多種變數名，跟你的模板相容
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;

  // **很重要**：這個會決定 Firestore 路徑 artifacts/{appId}/...
  // 改成 EndNote 專用，不要跟 WOS 混在一起
  window.__app_id = "writefull-quiz-prod";

  // 如果沒用自定義登入，保持 null 走匿名登入
  window.__initial_auth_token = null;
})();
