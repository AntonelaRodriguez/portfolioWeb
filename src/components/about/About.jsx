import React from "react";
import './about.css';
import myImage from '../../assets/me.png';
import {CgAlbum} from 'react-icons/cg';
import {FaUserGraduate} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return(
        <section id='about' className="about">
            <h5>Get To Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt="about description" />
                    </div>
                </div>
                

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <CgAlbum className="about__icon"/>
                            <h5>Experiece</h5>
                            <small>1+ year working</small>
                        </article>

                        <article className="about__card">
                            <FaUserGraduate className="about__icon"/>
                            <h5>Education</h5>
                            <small>Bootcamps</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Proyects</h5>
                            <small>3+ completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique maxime architecto aliquam accusamus dolore officia, amet omnis doloribus perferendis hic voluptatum dolores minima nesciunt, commodi fugit, repellat error mollitia!
                    </p>

                    <a href="#contact" className="btn btn-primary">Contact me!</a>
                </div>
            </div>
        </section>
    );
};

export default About;