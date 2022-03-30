import React from 'react';
import './Card.css'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

export const Card: React.FC<{subtitle: string, title:string, content:string}> = ({subtitle, title, content}) => {
    
    return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
              {content}
      </IonCardContent>
        </IonCard>

    );
};


export default Card;