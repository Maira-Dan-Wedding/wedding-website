import React, {useState} from 'react'; 

import { HERO } from './restaurants.data'; 

import CoverImage from '../../components/cover-image/cover-image.component'; 

const Restaurants = () => {
    const [hero] = useState()

    return (
        <CoverImage 
            imgUrl={hero.imgUrl}
            height={hero.height}
            position={hero.position}
            text={hero.text}
            filter={hero.filter}
        />
    )
}

export default Restaurants; 