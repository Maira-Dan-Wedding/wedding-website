import React from 'react'; 

import './rsvp.styles.sass'; 

import CoverImage from '../../components/cover-image/cover-image.component';
import Form from '../../components/form/form.component'

const Rsvp = () => {
    const hero = {
        imgUrl: "https://lh3.googleusercontent.com/YZMJY9NMAQvAY8Rour1GckQ0UeBuXRsrQHajVjRfYjCBSY8pnpUiCRlluE1qto103695ucb8E5-rL2__KqY7bGBpdA9W5edrp8NXemF4K53K1LFeqAp08ENNmwQOrIzcwbEOUb-jnUOa4dRJ2YQMZGZntQA18LUQB8B4yj6I-H0TEf0wJa6lCPPuMCJ4kNdftNOFyYzieLVRpd7u0WlTd6BwEkEkcwXfVF15ZunWQJy0TCCI-qx-IF1rb1RSD77sudDGDyo6QfF_7p920ghIb5E77Ypo4C3y04do310FQK4h-4ZJ_agdekgHDcRkKh3eIXkDu6Bky5mq4Lgp1U-a4lNtIDiwiisK3Jkow1s49F0AKkIBtgt-j_bFUjTvA1NjjDX-0XBwkVFmKkGT9h_v85ERdiJLfYrqhTgH_ARK6TOpa4U72-Jvil-QePYpOeWnw4rs_YtmSZzNP3-MLcqmQppROxtw9Mmg0LndcS9g0tshkuU8b4yoxChWE-dvaTvBMKQzu8OjDW26tk5iv1-_zApUH8fxa2YWvsoXR6OSLsGuI4URrV38W6cLE2LrEaKCm8wZ5IXuHwMjNbDzeIhwEitpIVJPy9ZutYnz4yIK_DYkWeLMeeKhpbMhCgybbvAl3fM4nvUDDL1nUFMlMvA9i_L0670Q_WE0lJ1uQoMjNzCBoL2mB1YiQiAXA92_vW9TYhd1SHUae76PQVp6Ry6JK0vAKp3YPwrmk-8EL_TMsTG4RlI=w852-h638-no",
        height: "40vh",
        position: "bottom",
        filter: "rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)", 
    }

    return(
        <div className="rsvp-page">
            <CoverImage 
                imgUrl={hero.imgUrl}
                height={hero.height}
                position={hero.position}
                text={hero.text}
                filter={hero.filter}
            />
            <Form 
                title="R.S.V.P"
                subtitle="Instruções || Instructions"
                instructionPt="Preencha, respectivamente, o seu primeiro e último nome completos, com um espaço de separação."
                instructionEn="Fill out your full first and last name respectively, with one space of separation."
            />
        </div>
    );
};

export default Rsvp; 