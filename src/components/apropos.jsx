import React from 'react';
import Container from 'react-bootstrap/Container';


import '../styles/style.css';

const Apropos = () => {
    return (
        <Container>
        <section className="page-section bg-white text-black mb-0" id="about">
            <div className="container">
                <div className="row">
                    <div className="text-center col-8 m-auto">
                    <p className="lead">Bonjour, je suis Bouillet Sébastien, j'ai 48 ans et je suis actuellement en reconversion professionnelle dans le développement web. À ce jour, j'ai suivi une formation diplomante chez OpenClassroom afin d"acquérir des compétences dans le développement frontend avec des langages de programmation tels que HTML-CSS, SASS, JAVASCRIPT, REACT, REDUX ...
                    Mon Objectif est de travailler sur de nouveaux projets web, partager mes connaissances et acquérir de nouvelles compétences. </p>
                    </div>
                   
                </div>
                {/* <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div> */}
            </div>
        </section>
       
        </Container>
        
    );
};

export default Apropos;