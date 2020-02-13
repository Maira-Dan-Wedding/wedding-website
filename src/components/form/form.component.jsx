import React from 'react'; 

import Container from '@material-ui/core/Container'
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

import './form.styles.sass'; 

const Form = ({
    title, 
    subtitle, 
    instructionPt, 
    instructionEn, 
    handleChange, 
    handleCheckbox,
    handleSubmit, 
    name, 
    numberOfConfirmedGuests,
    isAttendingWelcomeParty,
    isAttendingWedding,
    willNotGo,
    }) => {

    const styles = {
        margin: "1rem 0"
    }

    return(
        <div className="form">
            <Container>
                <div className="instructions-wrapper">
                    <h2 className="title">{title}</h2>
                    <h3 className="subtitle">{subtitle}</h3>
                    <div className="copy">
                        <p className="paragraph instructions-pt">{instructionPt}</p>
                    </div>
                    <div className="copy">
                        <p className="paragraph instructions-en">{instructionEn}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        handleChange={handleChange("name")}
                        label="First and Last Name"
                        type="text"
                        value={name}
                    />
                    <FormInput
                        handleChange={handleChange("numberOfConfirmedGuests")}
                        label="Convidados Confirmados || Confirmed guests"
                        type="number"
                        value={numberOfConfirmedGuests}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style={styles} checked={isAttendingWelcomeParty} onChange={handleCheckbox('isAttendingWelcomeParty')} value={isAttendingWelcomeParty} />
                        }
                        label="I will attend to the Welcome Party || Confirmo presença na Welcome Party"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style={styles} checked={isAttendingWedding} onChange={handleCheckbox('isAttendingWedding')} value={isAttendingWedding} />
                        }
                        label="I will attend to the Wedding || Confirmo presença no casamento"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style={styles} checked={willNotGo} onChange={handleCheckbox('willNotGo')} value={willNotGo} />
                        }
                        label="Regrettably I won't be able to attend || Infelizemente, não poderei comparecer"
                    />
                    <CustomButton
                        type="submit"
                    >
                        Submit
                    </CustomButton>
                </form>
            </Container>

        </div>
    );
};

export default Form