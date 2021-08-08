import React, { useState } from 'react'; 

import WELCOME_COPY from './welcome-copy'; 

import Grid from '@material-ui/core/Grid';

import './welcome.styles.sass'; 

const Welcome = () => {
    const [copy] = useState(WELCOME_COPY);
    
    return(
        <div className="welcome">
            <h2 className="title">Dan &amp; Maíra</h2>
            <h3 className="subtitle">Praia de Carneiros, Pernambuco || 4 de Abril de 2022</h3>
            <div className="box">
                <Grid container spacing={4}>

                    <Grid item md={6} sm={12}>
                        <div className="copy">
                            {copy.pt.map( p => (
                                <p className="paragraph welcome-pt" dangerouslySetInnerHTML={{ __html: p}} />
                            ))} 
                        </div>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <div className="copy">
                            {copy.en.map( p => (
                                <p className="paragraph welcome-en" dangerouslySetInnerHTML={{ __html: p}} />
                            ))} 
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Welcome; 