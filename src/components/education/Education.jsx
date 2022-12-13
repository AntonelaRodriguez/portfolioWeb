import React from "react";
import './education.css';
import AVT1 from '../../assets/logoHenry.png';
import AVT2 from '../../assets/logoHenry.png';
import AVT3 from '../../assets/logoHenry.png';

const data = [
    {
        avatar: AVT1,
        name: "Henry",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem voluptatibus a non, laborum tenetur autem corporis! Laborum voluptates quidem tempora consequatur repellendus. Quis similique dignissimos repellendus optio cum!",
    },
    {
        avatar: AVT2,
        name: "Henry",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem voluptatibus a non, laborum tenetur autem corporis! Laborum voluptates quidem tempora consequatur repellendus. Quis similique dignissimos repellendus optio cum!",
    },
    {
        avatar: AVT3,
        name: "Henry",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem voluptatibus a non, laborum tenetur autem corporis! Laborum voluptates quidem tempora consequatur repellendus. Quis similique dignissimos repellendus optio cum!",
    },
]

const Education = () => {
    return(
        <section id="education">
            <h5>Where do I study?</h5>
            <h2>Education</h2>

            <div className="container education__container">
                {
                    data.map(({avatar,name,description},index) => {
                        return(<article key={index} className="education">
                        <div className="avatar">
                            <img src={avatar} alt="logo" />
                        </div>
                        <h5 className="bootcamp_name">{name}}</h5>
                        <small className="career__description">{description}</small>
                    </article>)
                    })
                }
            </div>
        </section>
    );
};

export default Education;