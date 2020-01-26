import React, {useState} from 'react'; 

import { HERO, COPY, LIST } from './what-to-do.data'; 

import Hero from '../../assets/images/igreja-praia-1500px-min.jpg'

import CoverImage from '../../components/cover-image/cover-image.component'; 
import GeneralCopy from '../../components/general-copy/general-copy.component';
import Container from '@material-ui/core/Container'; 
import GenerealBulletPoint from '../../components/general-bullet-point/general-bullet-point.component';

const WhatToDo = () => {
    const [hero] = useState(HERO)
    const [copy] = useState(COPY)
    const [list] = useState(LIST)

    const { ...copyObj } = copy;
    const {...heroObj} = hero; 
    const {...listObj} = list; 

    return (
        <div className="what-to-do-page">
            <CoverImage bgImg={Hero} {...heroObj} />
            <Container>
                <GeneralCopy {...copyObj} />
                <GenerealBulletPoint { ...listObj} />
            </Container>
        </div>
    );
};

export default WhatToDo; 