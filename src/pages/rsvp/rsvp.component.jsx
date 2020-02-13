import React, { useState } from 'react'; 
import { firestore } from '../../firebase/firebase.utils'; 

import './rsvp.styles.sass'; 

import {HERO, FORM_COPY} from './rsvp.data'; 
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
        isAttendingWedding: false,
        willNotGo: false,
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

        if (willNotGo) {
            const notGuestRef = firestore.collection("not-guests").doc(name);

            notGuestRef.set({
                status: "Won't be able to go"
            }, {merge: true})
            .then( () => {
                setPopupStatus("SUCCESS_NOT_GUEST")
                setRsvp({
                    name: "",
                    isAttendingWelcomeParty: false,
                    istAttendingWedding: false,
                    numberOfConfirmedGuests: 0
                });
            }).catch(e => {
                console.log(e);
                setPopupStatus("ERROR")

            });
        } else {
            const guestRef = firestore.collection("guests").doc(name);

            guestRef.set({
                rsvped: true,
                isAttendingWelcomeParty,
                isAttendingWedding,
                numberOfConfirmedGuests
            }, {merge: true})
            .then( () => {
                setPopupStatus("SUCCESS")
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