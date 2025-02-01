# Firebase Configuration Guide

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project "Eco-Vatom"
3. In Project Settings → General → Your apps → Add Web App
4. Register app with nickname "Eco-Vatom Web"
5. Copy configuration object:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-bucket.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

6. Enable authentication providers:
   - Google
   - Facebook
   - Apple
