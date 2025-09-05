(function () {
  // 這組是 Firebase 主控台 > 專案設定 > 你的應用程式的設定（Web）
  const CFG = {
    apiKey: "AIzaSyC_2zmhxGd2ZXR2sR4abDMIOwwsPZj-JZg",
    authDomain: "lectures-satisfaction.firebaseapp.com",
    projectId: "lectures-satisfaction",
    storageBucket: "lectures-satisfaction.firebasestorage.app",
    messagingSenderId: "497320288646",
    appId: "1:497320288646:web:cd9b367d1ef99b8d170c07",
    measurementId: "G-XRXHEC6Z5J"
  };

  // 提供多種變數名，跟你的模板相容
  window.__firebase_config = JSON.stringify(CFG);
  window.__firebase_config_obj = CFG;
  window.firebaseConfig = CFG;

  // **很重要**：這個會決定 Firestore 路徑 artifacts/{appId}/...
  // 依照實際專案情境調整
  window.__app_id = "lectures-satisfaction";

  // 如果沒用自定義登入，保持 null 走匿名登入
  window.__initial_auth_token = null;
})();