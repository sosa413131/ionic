import React from 'react';
import { IonButton, IonContent, IonPage, useIonAlert } from '@ionic/react';
import "./Alert.css"

const Alert: React.FC = () => {
  const [present] = useIonAlert();
  return (<>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Alert',
              message: 'alert from hook',
              buttons: [
                'Cancel',
                { text: 'Ok', handler: (d) => console.log('ok pressed') },
              ],
              onDidDismiss: (e) => console.log('did dismiss'),
            })
          }
        >
          Show Alert
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello with params', [{ text: 'Ok' }])}
        >
          Show Alert using params
        </IonButton>
        </>

  );
};

export default Alert;