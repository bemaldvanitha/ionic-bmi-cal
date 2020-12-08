import React from 'react';
import {IonSegment,IonSegmentButton,IonLabel} from '@ionic/react';

const InputControl:React.FC<{selectedValue: 'mkg' | 'ftlbs'; changeUnits: (val: 'mkg'| 'ftlbs') => void;}> = (props) => {

    const inputChangeHandler = (event: CustomEvent) => {
        props.changeUnits(event.detail.value)
    }

    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value='mkg'>
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='ftlbs'>
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl;