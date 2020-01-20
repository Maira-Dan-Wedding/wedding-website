import React, { useState } from 'react'; 

import './rsvp.styles.sass'; 

import {RSVP_LIST, HERO, FORM_COPY} from './rsvp.data'; 
import {toCamelCase} from './rsvp.utils'; 

import CoverImage from '../../components/cover-image/cover-image.component';
import Form from '../../components/form/form.component'
import Popup from '../../components/popup/popup.component';

const Rsvp = () => {
    const [rsvpList, setRsvpList] = useState(RSVP_LIST);
    const [hero] = useState(HERO);
    const [formCopy] = useState(FORM_COPY)
    const [name, setName] = useState("");
    const [popupStatus, setPopupStatus] = useState(null);
    
    const handleChange = e => {
        const { value } = e.target;
        setName(value);
    };

    const updateRsvp = name => {
        setRsvpList({ ...rsvpList, [name]: true })
        return setPopupStatus("SUCCESS")
    };

    const resetPopup = () => setPopupStatus(null)

    const handleSubmit = e => {
        e.preventDefault();
        const nameCamel = toCamelCase(name);

        rsvpList[nameCamel] === undefined ? 
            setPopupStatus("ERROR") : (
            rsvpList[nameCamel] ? setPopupStatus("CONFIRMED") : updateRsvp(nameCamel)
        );

        setName("");
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