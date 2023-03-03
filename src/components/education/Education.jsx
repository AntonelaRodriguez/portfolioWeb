import React from "react";
import './education.css';
import AVT1 from '../../assets/logoHenry.png';
import AVT2 from '../../assets/logoNucba.png';
import AVT3 from '../../assets/logo_UAI.jpg';
import AVT4 from '../../assets/UNT.png';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVT1,
        name: "HENRY - Full Stack Developer",
        description: "2022 - 2023",
    },
    {
        avatar: AVT2,
        name: "NUCBA - Web Design",
        description: "2021 - 2022",
    },
    {
        avatar: AVT4,
        name: "UNT - College degree in Programming",
        description: "2021 - 2022",
    },
    {
        avatar: AVT3,
        name: "UAI - Nutrition degree",
        description: "2015 - 2020",
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