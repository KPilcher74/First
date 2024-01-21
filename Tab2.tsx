import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../usePhotoGallery';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import React, { useState } from 'react';
import { UserPhoto } from '../usePhotoGallery';
const { photos, takePhoto, deletePhoto } = usePhotoGallery();
const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
// other imports
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
      <IonContent> 
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={photo.filepath}>
        <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
  <IonActionSheet
  isOpen={!!photoToDelete}
  buttons={[
    {
      text: 'Delete',
      role: 'destructive',
      icon: trash,
      handler: () => {
        if (photoToDelete) {
          deletePhoto(photoToDelete);
          setPhotoToDelete(undefined);
        }
      },
    },
    {
      text: 'Cancel',
      icon: close,
      role: 'cancel',
    },
  ]}
  onDidDismiss={() => setPhotoToDelete(undefined)}
/>
</IonContent> 
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
