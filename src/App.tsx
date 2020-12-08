import React,{ useState } from 'react';
import { IonApp,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,
    IonGrid,IonCol,IonRow,IonAlert } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import BmiControls from "./components/BmiControls";
import BmiResults from "./components/BmiResults";
import InputControl from "./components/InputConrol";

const App: React.FC = () => {
    const [weight,setWeight] = useState<string>('');
    const [height,setHeight] = useState<string>('');
    const [bmi,setBmi] = useState<number>();
    const [error,setError] = useState<string>();
    const [calcUnits,setCalcUnit] = useState<'mkg' | 'ftlbs'>('mkg');

    const calculateBMI = () => {
        if(weight.length === 0 || height.length === 0 || +weight <= 0 || +height <= 0){
            setError('Please Enter valid Number');
            return;
        }
        let BMI = 0;

        if(calcUnits === 'mkg'){
            BMI = +weight/(+height * +height);
        }else{
            BMI = (+weight*0.4536)/(+height * 0.3048 * +height * 0.3048)
        }

        setBmi(BMI);
    };

    const resetInputs = () => {
        setWeight('');
        setHeight('');
    };

    const setUnits = (value: 'mkg' | 'ftlbs') => {
        setCalcUnit(value);
    }

    return(
        <IonApp>
            <IonAlert isOpen={!!error} message={error} buttons={[
                { text: 'Ok',handler: () => setError('') }
            ]}/>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>
                        BMI Calculator
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <InputControl selectedValue={calcUnits} changeUnits={setUnits}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'>Your Height {calcUnits === 'mkg' ? 'm': 'ft'}</IonLabel>
                                <IonInput type='number' value={height} onIonChange={e => setHeight(e.detail.value!)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'>Your Weight  {calcUnits === 'mkg' ? 'kg' : 'lbs'}</IonLabel>
                                <IonInput type='number' value={weight} onIonChange={e => setWeight(e.detail.value!)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <BmiControls onCalculate={calculateBMI} onReset={resetInputs}/>
                    {
                        bmi && <BmiResults bmi={bmi}/>
                    }
                </IonGrid>
            </IonContent>

        </IonApp>
    )
};

export default App;