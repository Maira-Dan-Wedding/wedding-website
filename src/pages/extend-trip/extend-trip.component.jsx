import React, {useState} from 'react'; 

import './extend-trip.styles.sass'; 

import { COPY, HERO } from './extend-trip.data'; 
import Hero from '../../assets/images/praia-dos-carneiros-pernambuco4-1900.jpg' 

import GeneralCopy from '../../components/general-copy/general-copy.component'; 
import CoverImage from '../../components/cover-image/cover-image.component'; 
import Container from '@material-ui/core/Container'

const ExtendTrip = () => {
    const [hero] = useState(HERO)
    const [copy] = useState(COPY)

    const { ...copyObj } = copy;
    const {...heroObj} = hero; 

    return (
        <div className="extend-trip-page">
            <CoverImage bgImg={Hero} {...heroObj} />
            <Container>
                <GeneralCopy {...copyObj} />
            </Container>
        </div>
    )
}

export default ExtendTrip; 