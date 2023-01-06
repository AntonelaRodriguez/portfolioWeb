import React from "react";
import './header.css';
import Btns from "./btns/btns";
import myImage from "../../assets/me1.png";
import HeaderSocials from "./headerSocials/HeaderSocials";

const Header = () => {
    return(
        <div className="header">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Antonela Rodriguez</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <Btns/>
                <HeaderSocials/>

                <div className="me">
                    <img src={myImage} alt="me"/>
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </div>
    );
};

export default Header;