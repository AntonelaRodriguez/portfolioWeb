import React from "react";
import './skills.css';
import {BsCheck2Square} from 'react-icons/bs'

const Skills = () => {
    return(
        <section id="skills" className="skill">
            <h5>What are my recent projects?</h5>
            <h2>Projects</h2>

            <div className="container skills__container">
                <article className="skills">
                    <div className="skills__head">
                        <h3>Candyshop</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- An E-commerce for candy sales</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- Basic features of e-commerce.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- Payment gateway integration (Mercado Pago).</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- Sending transactional emails.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- Management and sending of newsletters.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- Management of shopping cart and product orders.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>- User administration, key management (Auth0).</p>
                        </li>
                    </ul>
                </article>

                <article className="skills">
                    <div className="skills__head">
                        <h3>Individual Project - Henry Pokemon</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>Design and develop a “Pokémon” app</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>Includes searching, filtering, sorting, creating, editing, and deleting.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>Programming the app using for Front React, Redux and pure CSS.</p>
                        </li>
                        <li>
                            {/* <BsCheck2Square className="skills__list-icon"/> */}
                            <p>The Back was developed using Node.js with Express.</p>
                        </li>
                    </ul>
                </article>

                <article className="skills">
                    <div className="skills__head">
                        <h3>Nutriendo tus días</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>An E-commerce of meals sales and nutritional services.</p>
                        </li>
                        <li>
                            <BsCheck2Square className="skills__list-icon"/>
                            <p>Design the user interface and aesthetic experience of the web page</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Skills;