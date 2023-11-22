import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/candyshop.png'
import IMG2 from '../../assets/pokemon.png'
import IMG3 from '../../assets/509be709-8b7f-4ce1-8089-babf11141785.png'
import IMG4 from '../../assets/SV.png'
import IMG5 from '../../assets/209015942-47012eea-d51c-491f-ad8b-c45ec034146b.jpg'
import IMG6 from '../../assets/codoACodo.png'

const data = [
    {
        id: 1,
        image: IMG4,
        title: "Sistema de Venta - Mia Perla",
        github: 'https://github.com/AntonelaRodriguez/SistemaVenta',
        // demo: 'https://candy-shop-sage.vercel.app/'
    },
    {
        id: 2,
        image: IMG1,
        title: "CandyShop",
        github: 'https://github.com/AntonelaRodriguez/CandyShop',
        demo: 'https://candy-shop-sage.vercel.app/'
    },
    {
        id: 3,
        image: IMG2,
        title: "Pokémon App",
        github: 'https://github.com/AntonelaRodriguez/pokemon',
        // demo: 'https://integrador-dise-o-6qskoydhx-antonelarodriguez.vercel.app/'
    },
    {
        id: 4,
        image: IMG6,
        title: "Website about conferences",
        github: 'https://github.com/AntonelaRodriguez/tp-integrador-front',
        demo: 'https://tp-integrador-front.vercel.app/'
    },
    {
        id: 5,
        image: IMG3,
        title: "Nutriendo tus días",
        github: 'https://github.com/AntonelaRodriguez/integradorDise-oWeb',
        demo: 'https://integrador-dise-o-6qskoydhx-antonelarodriguez.vercel.app/'
    },
    {
        id: 6,
        image: IMG5,
        title: "Punto de venta",
        github: 'https://github.com/AntonelaRodriguez/SISTEMA_PUNTO_DE_VENTAS',
        // demo: 'https://integrador-dise-o-6qskoydhx-antonelarodriguez.vercel.app/'
    },
];

const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
               {
                data.map(({id, image, title, github, demo}) => {
                    return(
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>"{title}"</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className="btn" target='_blank'>Github</a>
                            {demo ? (
                                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                            ) : (
                                <button className="btn btn-primary btn-disabled" disabled>No Live Demo</button>
                                )}
                        </div>
                    </article>
                    )
                })
               }
            </div>
        </section>
    );
};

export default Portfolio;