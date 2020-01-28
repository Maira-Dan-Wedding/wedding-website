import React, { useState } from 'react'; 
import { firestore } from '../../firebase/firebase.utils'; 

import './rsvp.styles.sass'; 

import {HERO, FORM_COPY} from './rsvp.data'; 
import {toCamelCase} from './rsvp.utils'; 
import Hero from '../../assets/images/min/rsvp-hero-min.jpg'
import HeroMobile from '../../assets/images/min/rsvp-hero-mobile-min.jpg'

import CoverImage from '../../components/cover-image/cover-image.component';
import Form from '../../components/form/form.component'
import Popup from '../../components/popup/popup.component';

const Rsvp = () => {
    //STATE HOOKS
    const [hero] = useState(HERO);
    const [formCopy] = useState(FORM_COPY)
    const [rsvp, setRsvp] = useState({
        name: "",
        isAttendingWelcomeParty: false,
        istAttendingWedding: false,
        numberOfConfirmedGuests: 0
    });
    const [popupStatus, setPopupStatus] = useState(null);

    //DESTRUCTURING
    const { ...rsvpInputs } = rsvp
    const {name, isAttendingWelcomeParty, isAttendingWedding, numberOfConfirmedGuests } = rsvp; 

    const handleChange = name => e => {
        setRsvp({...rsvp, [name]: e.target.value})
    };

    const handleCheckbox = name => e => {
        setRsvp({...rsvp, [name]: e.target.checked})
    };

    const resetPopup = () => setPopupStatus(null)

    const handleSubmit = e => {
        e.preventDefault();

        if(!name) return setPopupStatus("ERROR");

        const nameCamel = toCamelCase(name);
        const guestRef = firestore.collection("guests").doc(nameCamel);

        return firestore.runTransaction(transaction => {
            return transaction.get(guestRef).then(snapshot => {
                if (snapshot.exists) {
                    const guestData = snapshot.data()

                    if (guestData.rsvped) {
                        setPopupStatus("SUCCESS")
                    } else {
                        transaction.update(guestRef, {rsvped: true });
                        guestRef.set({
                            isAttendingWelcomeParty,
                            isAttendingWedding,
                            numberOfConfirmedGuests
                        },{merge: true})
                        setPopupStatus("SUCCESS")
                    }

                } else {
                    setPopupStatus("ERROR")
                }
            })
        }).then( () => {
            setRsvp({
                name: "",
                isAttendingWelcomeParty: false,
                istAttendingWedding: false,
                numberOfConfirmedGuests: 0
            });
        }).catch(e => {
            console.log(e);
            setPopupStatus("ERROR")

        })

    };


    return(
        <div className="rsvp-page">
            <CoverImage 
                bgImg={Hero}
                bgImgMobile={HeroMobile}
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
                handleCheckbox={handleCheckbox}
                handleSubmit={handleSubmit}
                {...rsvpInputs}
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