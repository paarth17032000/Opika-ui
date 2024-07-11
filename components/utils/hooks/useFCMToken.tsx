"use client"
import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { firebaseApp } from '@/components/Notifications/firebase';
import { toastMessage } from '@/components/Toast/toastMessage';
// import firebaseApp from '../firebase/firebase';

const useFcmToken = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Retrieve the notification permission status
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          // Check if permission is granted before retrieving the token
          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
                vapidKey:
                  "BP3q6fswZIY4-xMx3A0F5URbZE24VMXCo9ZQr5GMEtCXOO4G1abB12iuQ6hngb1kfutqrnb9fjo-uyC0xPoGLyk",
              });
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
              toastMessage("Error while generating firebase token", "error");
            }
          }
        }
      } catch (error) {
        console.log('An error occurred while retrieving token:', error);
        toastMessage("Error while recieving firebase token", "error");
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;