import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import photoOmf from '../assets/images/photo_omf.png';
import photoKasa from '../assets/images/photo_kasa.png';
import photoArgentBank from '../assets/images/photo_argentBank.png';
import photoQwenta from '../assets/images/photo_qwenta.png';




import '../styles/style.css';


const Portfolio = () => {
    return (
        <Container>
        <section className="section-portfolio">
        <div className="section-portfolio__title">
          <h1>Mes projets</h1>
        </div>
        <div className='section-portfolio__list'>

        <div className='card-one'>
        <div className='card-title'>
          <h2>Projet Ohmyfood</h2>
        </div>
        <img src= { photoOmf } alt='photo card1'></img>
        <div className='card-text'>
          <p className='titre'>Améliorer l'interface d'un site mobile avec des animations CSS</p>
          <p>Intégrer une maquette en mobile-first</p>
          <p>Mettre en œuvre des animations CSS</p>
          <p>Versionner son projet avec Git et Github</p>
        </div>
        <Button variant="secondary" size="lg">
        Block level button
        </Button>
        </div>

        <div className='card-one'>
        <div className='card-title'>
          <h2>Projet Kasa </h2>
        </div>
        <img src ={ photoKasa } alt='photo card1'></img>
        <div className='card-text'>
          <p className='titre'>Application web de location immobilière avec React</p>
          <p>Initialiser une application avec Create React App ou Vite</p>
          <p>Configurer la navigation entre les pages de l'application avec React Router</p>
          <p>Développer des éléments de l'interface d'un site web grâce à des composants React</p>
          <p>Mettre en œuvre des animations CSS</p>
          <p>Développer une interface web avec Sass</p>
        </div>
          </div>

          <div className='card-one'>
          <div className='card-title'>
          <h2>Projet ArgentBank </h2>
        </div>
        <img src ={ photoArgentBank } alt='photo card1'></img>
        <div className='card-text'>
          <p className='titre'>Implémenter le frontend d'une application bancaire avec React</p>
          <p>Afficher les données du back end sur l'interface via des appels API</p>
          <p>Configurer des routes API pour la communication client / serveur</p>
          <p>Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front</p>
        </div>
          
          </div>
          <div className='card-one'>
          <div className='card-title'>
          <h2>Projet Qwenta</h2>
         </div>
         <img src ={ photoQwenta } alt='photo card1'></img>
         <div className='card-text'>
          <p className='titre'>Planifiez le développement du site de votre client</p>
          <p>Présenter la solution technique</p>
          <p>Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels</p>
          <p>Découper une fonctionnalités en tâches pour préparer le développement</p>
          <p>Mettre en place une méthode de veille technologique</p>
          <p>Suivre le déroulement du projet grâce à un outil de gestion de projet</p>
         </div>
          </div>
        </div>





        </section>
        
    </Container>
       
    );
};

export default Portfolio;