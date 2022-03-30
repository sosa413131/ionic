import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Alert from '../components/Alert'
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Card subtitle='Subtitle Here' title='Title Here' content='Content Here' />
        <Badge/>
        <Alert/>
        <img src="./assets/img.jpg" alt="me in yosemite"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
