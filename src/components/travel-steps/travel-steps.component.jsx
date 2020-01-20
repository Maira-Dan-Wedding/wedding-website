import React, { useState } from 'react'; 

import TRAVEL_DATA from './travel.data';

import FlightLand from '@material-ui/icons/FlightLand';
import DriveEta from '@material-ui/icons/DriveEta';
import Home from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid'; 
import Container from '@material-ui/core/Container';

import Feature from '../feature/feature.component'; 

import './travel-steps.styles.sass'; 

const TravelSteps = () => {
    const [travel] = useState(TRAVEL_DATA);

    const featureIcon = (icon) => {
        switch(icon) {
            case "flight": 
                return <FlightLand style={{fontSize: 80}} />
            case "car": 
                return <DriveEta style={{fontSize: 80}}/>
            case "hotel": 
                return <Home style={{fontSize: 80}}/>
            default: 
                return; 
        };
    };

    return(
        <div className="travel-steps">
            <Container>
                <Grid container>
                    {travel.map(({icon, ...props}, i) => (
                        <Grid item md={4} sm={12} xs={12}>
                            <Feature key={i} {...props}>{featureIcon(icon)}</Feature>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default TravelSteps; 