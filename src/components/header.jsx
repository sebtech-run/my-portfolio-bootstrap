import React from 'react';
import Photoseb from '../assets/images/photoseb.jpeg';
import Container from 'react-bootstrap/Container';

import '../styles/style.css';

const Header = () => {
    return (
        <Container>
        <header className="masthead bg-white text-black text-center">
            <div className="container d-flex align-items-center justify-content-center gap-5 flex-row">
                <img className="bird" src={Photoseb} alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">WEB DEVELOPER</h1>   
            </div>
        </header>
        </Container>
    );
};

export default Header;