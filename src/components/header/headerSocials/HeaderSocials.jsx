import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/antonela-rodriguez/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AntonelaRodriguez" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/anto.bell.20/?hl=es" target="_blank" rel="noreferrer"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials;