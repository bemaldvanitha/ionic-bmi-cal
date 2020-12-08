import React from 'react';
import {IonButton, IonCol, IonIcon, IonRow} from "@ionic/react";
import {calculatorOutline, refreshOutline} from "ionicons/icons";

const BmiControls: React.FC<{onReset: () => void; onCalculate: () => void;}> = (props) => {
    return(
        <IonRow className='ion-margin-top'>
            <IonCol className="ion-text-center">
                <IonButton onClick={props.onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline} />
                    Calculate
                </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
                <IonButton color="danger" fill='outline' onClick={props.onReset}>
                    <IonIcon slot="start" icon={refreshOutline} />
                    Reset
                </IonButton>
            </IonCol>
        </IonRow>
    )
};

export default BmiControls;