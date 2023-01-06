import React from "react";
import './education.css';
import AVT1 from '../../assets/logoHenry.png';
import AVT2 from '../../assets/logoNucba.png';
import AVT3 from '../../assets/logo_UAI.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVT1,
        name: "HENRY - Full Stack Developer",
        description: "An intensive online  (Bootcamp) that simulates a real work environment and prepares for a successful career as a Full Stack developer.",
    },
    {
        avatar: AVT2,
        name: "NUCBA - Full Stack Developer",
        description: "At Nucba, I learned the most important skills in programming, design and digital economy skills.",
    },
    {
        avatar: AVT3,
        name: "UAI - Nutrition degree",
        description: "Nutritinist with the capacity for autonomy, leadership and decision-making, who works in the clinical, community, educational and management areas.",
    },
]

const Education = () => {
    return(
        <section id="education">
            <h5>Where do I study?</h5>
            <h2>Education</h2>

            <Swiper className="container education__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar,name,description},index) => {
                        return(
                        <SwiperSlide key={index} className="education">
                            <div className="avatar">
                                <img src={avatar} alt="logo" />
                            </div>
                            <h5 className="bootcamp_name">{name}</h5>
                            <small className="career__description">{description}</small>
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </section>
    );
};

export default Education;