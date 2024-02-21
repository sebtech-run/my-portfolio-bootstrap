import React from 'react';
import Photoseb from '../assets/images/photoseb.jpeg'

import '../styles/style.css';

const Header = () => {
    return (
        <header className="masthead bg-secondary text-white text-center">
            <div className="container d-flex align-items-center justify-content-center gap-5 flex-row">
                <img className="bird" src={Photoseb} alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Développeur Web</h1>   
            </div>
        </header>
    );
};

export default Header;