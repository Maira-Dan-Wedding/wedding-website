import React from 'react'; 

import Container from '@material-ui/core/Container'
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component'; 

import './form.styles.sass'; 

const Form = ({title, subtitle, instructionPt, instructionEn, handleChange, handleSubmit, name}) => {

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
                        handleChange={handleChange}
                        label="Primeiro e Último Nome || First and Last Name"
                        type="text"
                        value={name}
                    />
                    <CustomButton
                        type="submit"
                    >
                        -->
                    </CustomButton>
                </form>
            </Container>

        </div>
    );
};

export default Form