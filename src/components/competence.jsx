import React from 'react';
import Container from 'react-bootstrap/Container';

import '../styles/style.css';

const Competence = () => {
    return (
       <Container>
       <section className='section-competence'>
       <div className='section-competence__div1'>
       <h2>Skills</h2>
       <div className='section-competence__div1__text'>
       <i class="fa-solid fa-laptop-code"></i>
       <div>
        <p className='competence-title'>Développement en React</p>
        <p>React app - vite - router - components</p>
       </div>
       </div>
       <div className='section-competence__div1__text'>
       <i class="fa-regular fa-images"></i>
       <div>
        <p className='competence-title'>Conception multi-plateformes</p>
        <p>Mobile first - Responsive - Media queries</p>
       </div>
       </div>
       <div className='section-competence__div1__text'>
       <i class="fa-solid fa-pencil"></i>
       <div>
        <p className='competence-title'>Design Web - Maquette</p>
        <p>Figma - Curve - Drawoi</p>
       </div>
       </div>
       <div className='section-competence__div1__text'>
       <i class="fa-brands fa-google"></i>
       <div>
        <p className='competence-title'>Référencement - SEO</p>
        <p>Microdatas - Rich Snippet - Schema.org - Open Graph</p>
       </div>
       </div>
       <div className='section-competence__div1__text'>
       <i class="fa-solid fa-list-check"></i>
       <div>
        <p className='competence-title'>Gestion de projet Web</p>
        <p>Planification de projet - Méthodologie Agile</p>
       </div>
       </div>
       <div className='section-competence__div1__text'>
       <i class="fa-solid fa-screwdriver-wrench"></i>
       <div>
        <p className='competence-title'>Débug et Optimisation</p>
        <p>React DevTools - chrome dev - Lighthouse</p>
       </div>
       </div>
       


    

       </div>

       <div className='section-competence__div2'>
       <h2>Stacks</h2>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-html5"></i>
       <i class="fa-brands fa-css3"></i>
       <div>
        <p>Html -Css</p>
        
       </div>
       </div>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-sass"></i>
       <div>
        <p>Sass</p>
        
       </div>
       </div>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-bootstrap"></i>
       <div>
        <p>Bootstrap</p>
        
       </div>
       </div>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-js"></i>
       <i class="fa-brands fa-react"></i>
       <div>
        <p>Javascript - ReactJs</p>
        
       </div>
       </div>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-node"></i>
       <i class="fa-brands fa-node-js"></i>
       <div>
        <p>NodeJs - ExpressJs</p>
        
       </div>
       </div>

       <div className='section-competence__div2__text'>
       <i class="fa-solid fa-database"></i>
       <div>
        <p>MongoDB</p>
        
       </div>
       </div>
       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-github"></i>
       <div>
        <p>GitHub</p>
        
       </div>
       </div>


       <div className='section-competence__div2__text'>
       <i class="fa-brands fa-codepen"></i>
       <div>
        <p>CodePen</p>
        
       </div>
       </div>

       <div className='section-competence__div2__text'>
       <i class="fa-solid fa-code"></i>

       <div>
        <p>Visual Studio Code</p>
        
       </div>
       </div>








       </div>





       </section>
       

       


       </Container>
    );
};

export default Competence;