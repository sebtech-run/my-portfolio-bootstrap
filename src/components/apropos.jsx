import React from 'react';
import Container from 'react-bootstrap/Container';


import '../styles/style.css';

const Apropos = () => {
    return (
        <Container>
        <section className="page-section bg-white text-black mb-0" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p class="lead">Passionné par l'informatique dés mon plus jeune age, c'est tout naturellement que je me suis formé en autodidacte</p></div>
                    <div className="col-lg-4 me-auto"><p class="lead">À ce jour, j'ai suivi une formation diplomante chez OpenClassrooms afin d'acquérir les compétences nécéssaires dans le développement frontend avec des langages de programmation tels que Html , Css, Javascript, React...</p></div>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div>
            </div>
        </section>
       
        </Container>
        
    );
};

export default Apropos;