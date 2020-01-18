import React, { useState } from 'react'; 

import WELCOME_COPY from './welcome-copy'; 

import Grid from '@material-ui/core/Grid';

import './welcome.styles.sass'; 

const Welcome = () => {
    const [copy] = useState(WELCOME_COPY);
    
    return(
        <div className="welcome">
            <h2 className="title">Maíra &amp; Dan</h2>
            <h3 className="subtitle">Praia de Carneiros, Pernanbuco || 13 de Novembro, 2020</h3>
            <div className="box">
                <Grid container spacing={4}>

                    <Grid item md={6} sm={12}>
                        <div className="copy">
                            {copy.pt.map( p => (
                                <p className="paragraph welcome-pt">{p}</p>
                            ))} 
                        </div>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <div className="copy">
                            {copy.en.map( p => (
                                <p className="paragraph welcome-en">{p}</p>
                            ))} 
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Welcome; 