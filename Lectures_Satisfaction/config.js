(function () {
  // 這組是 Firebase 主控台 > 專案設定 > 你的應用程式的設定（Web）
  const CFG = {
    apiKey: "AIzaSyBSg7TC4T2ow6SCOB0exofG5IrOCVdAvXE",
    authDomain: "gen-lang-client-0408364726.firebaseapp.com",
    projectId: "gen-lang-client-0408364726",
    storageBucket: "gen-lang-client-0408364726.firebasestorage.app",
    messagingSenderId: "368909370652",
    appId: "1:368909370652:web:3193a4f6218d820881e6d9",
    measurementId: "G-X7Y59BN3ZK"
  };

  // 提供多種變數名，跟你的模板相容
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;

  // **很重要**：這個會決定 Firestore 路徑 artifacts/{appId}/...
  // 依照實際專案情境調整
  window.__app_id = "gen-lang-client-0408364726";

  // 如果沒用自定義登入，保持 null 走匿名登入
  window.__initial_auth_token = null;
})();