import React from "react";
import './skills.css';
import {BsCheck2Square} from 'react-icons/bs'

const Skills = () => {
    return(
        <section id="skills" className="skill">
            <h5>What are my skills</h5>
            <h2>Skills</h2>

            <div className="container skills__container">
                <article className="skills">
                    <div className="skills__head">
                        <h3>UX/UI design</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="skills">
                    <div className="skills__head">
                        <h3>Content creation</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="skills">
                    <div className="skills__head">
                        <h3>Web Develoment</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Skills;