import React, { useState } from 'react'; 
import { firestore } from '../../firebase/firebase.utils'; 

import './rsvp.styles.sass'; 

import {HERO, FORM_COPY} from './rsvp.data'; 
import {toCamelCase} from './rsvp.utils'; 

import CoverImage from '../../components/cover-image/cover-image.component';
import Form from '../../components/form/form.component'
import Popup from '../../components/popup/popup.component';

const Rsvp = () => {
    const [hero] = useState(HERO);
    const [formCopy] = useState(FORM_COPY)
    const [name, setName] = useState("null");
    const [popupStatus, setPopupStatus] = useState(null);

    const handleChange = e => {
        const { value } = e.target;
        setName(value);
    };

    const resetPopup = () => setPopupStatus(null)

    const handleSubmit = e => {
        e.preventDefault();

        const nameCamel = toCamelCase(name);
        const guestRef = firestore.collection("guests").doc(nameCamel);

        return firestore.runTransaction(transaction => {
            return transaction.get(guestRef).then(snapshot => {
                if (snapshot.exists) {
                    const guestData = snapshot.data()

                    if (guestData.rsvped) {
                        setPopupStatus("SUCCESS")
                    } else {
                        transaction.update(guestRef, { rsvped: true });
                        setPopupStatus("SUCCESS")
                    }

                } else {
                    setPopupStatus("ERROR")
                }
            })
        }).then( () => {
            setName("");
        }).catch(e => {
            console.log(e);
            setPopupStatus("ERROR")

        })

    };

    return(
        <div className="rsvp-page">
            <CoverImage 
                imgUrl={hero.imgUrl}
                height={hero.height}
                position={hero.position}
                text={hero.text}
                filter={hero.filter}
            />
            <Form 
                title={formCopy.title}
                subtitle={formCopy.subtitle}
                instructionPt={formCopy.instructionsPt}
                instructionEn={formCopy.instructionsEn}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={name}
            />
            {popupStatus ? (
                <Popup 
                    status={popupStatus}
                    resetPopup={resetPopup}
                />
            ) : null }
                
        </div>
    );
};

export default Rsvp; 