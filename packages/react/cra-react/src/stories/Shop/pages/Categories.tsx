import {
  IonContent,
  IonHeader,
  IonLabel,
  IonNote,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { capitalize, productInfo } from "../utils";

import styles from "./Categories.module.scss";

const Categories = () => {
  const categories = Object.keys(productInfo);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Shop</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle size="large" className="page-title">
            <IonLabel>ionic</IonLabel>
            <IonNote>Shop</IonNote>
          </IonTitle>
        </IonToolbar>

        <IonRow>
          {categories.map((category, index) => (
            <IonRouterLink
              routerLink={`/categories/${category.toLowerCase()}`}
              key={`categories_${index}`}
            >
              <div className={styles.categoryContainer}>
                <img src={productInfo[category].coverImage} alt="cover" />
                <p>{capitalize(category)}</p>
              </div>
            </IonRouterLink>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
