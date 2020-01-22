import React from 'react';

import TravelSteps from '../travel-steps/travel-steps.component'; 

import './travel.styles.sass'; 

const Travel = () => (
    <div className="travel" id="travel">
        <h2 className="title">Como Chegar || How to Get There</h2>
        <TravelSteps/>
    </div>
);

export default Travel; 