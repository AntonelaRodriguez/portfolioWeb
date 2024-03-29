import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nkrb97r', 'template_comdpat', form.current, 'cFTVIeO15aAImKxlv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };

    return(
        <section id='contact' className="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>antonelabelenrodriguez@gmail.com</h5>
                        <a href="mailto:antonelabelenrodriguez@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <ImWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+54 9 11 63714762</h5>
                        <a href="https://api.whatsapp.com/send/?phone=5491163714762" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="text" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary" >Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;