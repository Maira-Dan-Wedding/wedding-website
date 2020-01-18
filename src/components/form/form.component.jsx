import React, { useState } from 'react'; 

import Container from '@material-ui/core/Container'
import FormInput from '../form-input/form-input.component'; 

import './form.styles.sass'; 

const Form = ({title, subtitle, instructionPt, instructionEn}) => {
    const [name, setName] = useState("") 

    const handleChange = e => {
        const {value} = e.target;
        setName(value);

    };

    const handleSubmit = e => {
        e.preventDefalt();
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
                        handleChange={handleChange}
                        label="Primeiro e Último Nome || First and Last Name"
                        type="text"
                        value={name}
                    />
                </form>
            </Container>

        </div>
    );
};

export default Form