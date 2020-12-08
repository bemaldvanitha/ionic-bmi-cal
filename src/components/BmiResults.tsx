import React from 'react';
import {IonCard, IonCardContent, IonCol, IonRow} from "@ionic/react";

import './BmiResults.css'

const BmiResults:React.FC<{bmi: number}> = (props) => {
    return(
        <IonRow>
            <IonCol>
                <IonCard id='result'>
                    <IonCardContent className='ion-text-center'>
                        <h2>Your Body Mass Index</h2>
                        <h3>{ props.bmi.toFixed(2) }</h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
};

export default BmiResults;