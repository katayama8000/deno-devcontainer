import React, { useState, useEffect } from 'react';
import { app } from '../../lib/firebase';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

type NotificationType = {
  title: string;
  body: string;
};

export const Notification = () => {
  const [notification, setNotification] = useState<NotificationType>({
    title: '',
    body: '',
  });
  useEffect(() => {
    if (notification?.title) {
      alert('title: ' + notification?.title + '\nbody: ' + notification?.body);
    }
  }, [notification]);

  useEffect(() => {
    // クライアントサイドで実行する必要あり
    const messaging = getMessaging(app);
    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
    const requestForToken = async (): Promise<void> => {
      try {
        const currentToken = await getToken(messaging, {
          vapidKey,
        });
        if (currentToken) {
          console.log('current token for client: ', currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      } catch (err) {
        console.log('!!!!!!!!!!!!!!!!');
        console.log('An error occurred while retrieving token. ', err);
      }
    };

    const onMessageListener = () =>
      new Promise((resolve) => {
        onMessage(messaging, (payload) => {
          console.log('payload', payload);
          resolve(payload);
        });
      });
    requestForToken();
    onMessageListener()
      .then((payload: any) => {
        const { title, body } = payload.notification || {};
        setNotification({
          title: title || '',
          body: body || '',
        });
      })
      .catch((err) => console.log('failed: ', err));
  }, []);

  return (
    <div>
      <h1>Notification</h1>
    </div>
  );
};
