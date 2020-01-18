import React, { useState} from 'react'; 

import './homepage.styles.sass'; 


import IMAGES from './images.data.js'

import Welcome from '../../components/welcome/welcome.component';
import ScheduleOverview from '../../components/schedule-overview/schedule-overview.component';
import Travel from '../../components/travel/travel.component';
import CoverImage from '../../components/cover-image/cover-image.component';


const Homepage = () =>{ 
    const [images] = useState(IMAGES);
        return (
        <div className="homepage">
            <CoverImage
                imgUrl={images.img1.imgUrl}
                height={images.img1.height}
                position={images.img1.position}
            />
            <Welcome />
            <CoverImage
                imgUrl={images.img2.imgUrl}
                height={images.img2.height}
                position={images.img2.position}
            />
            <ScheduleOverview />
            <Travel />
        </div>
    );
}
export default Homepage; 