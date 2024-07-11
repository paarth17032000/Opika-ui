// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1guHHJTndprgDs7ES5Y2VrYCv5xRixJo",
  authDomain: "opika-ui.firebaseapp.com",
  projectId: "opika-ui",
  storageBucket: "opika-ui.appspot.com",
  messagingSenderId: "150664460283",
  appId: "1:150664460283:web:609e1397fb5460b980fd5e",
  measurementId: "G-WY4VWVR581",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    try{

        const permission = await Notification.requestPermission();
        console.log(permission);
        if (permission == "granted") {
            const token = await getToken(messaging, {
      vapidKey:
        "BP3q6fswZIY4-xMx3A0F5URbZE24VMXCo9ZQr5GMEtCXOO4G1abB12iuQ6hngb1kfutqrnb9fjo-uyC0xPoGLyk",
    });
    console.log(token)
}
} catch (err) {
    console.log(err)
}
};
