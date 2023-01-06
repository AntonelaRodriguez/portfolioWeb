import React from "react";
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return(
        <div className="footer">
            <a href="#" className="footer__logo">Antonela Rodriguez</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/antonela-rodriguez/"><BsLinkedin/></a>
                <a href="https://github.com/AntonelaRodriguez"><BsGithub/></a>
                <a href="https://www.instagram.com/anto.bell.20/?hl=es"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;@anto.bell.20. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;