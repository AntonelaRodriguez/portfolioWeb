import React from "react";
import './nav.css';
import {ImHome} from 'react-icons/im';
import {ImUser} from 'react-icons/im';
import {MdWork} from 'react-icons/md';
import {GiSkills} from 'react-icons/gi';
import {MdOutlineMessage} from 'react-icons/md';
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return(
        <div className="nav">
            <a 
                href="#" 
                className={activeNav === '#' ? 'active' : ''}
            ><ImHome/></a>
            <a 
                href="#about" 
                onClick={() => setActiveNav("#about")} 
                className={activeNav === '#about' ? 'active' : ''}
            ><ImUser/></a>
            <a 
                href="#experience"
                onClick={() => setActiveNav("#experience")} 
                className={activeNav === '#experience' ? 'active' : ''}
            ><MdWork/></a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")} 
                className={activeNav === '#portfolio' ? 'active' : ''}
            ><GiSkills/></a>
            <a 
                href="#contact"
                onClick={() => setActiveNav("#contact")} 
                className={activeNav === '#contact' ? 'active' : ''}
            ><MdOutlineMessage/></a>
        </div>
    );
};

export default Nav;