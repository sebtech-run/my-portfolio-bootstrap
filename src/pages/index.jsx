import React from 'react';
import Navigation from '../components/nav';
import Header from '../components/header';
import Apropos from '../components/apropos';

import Competence from '../components/competence';
import Footer from '../components/footer';
import Formation from '../components/formation';

const Index = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Apropos />
            <Formation />
            <Competence />
            
            <Footer />
        </div>
    );
};

export default Index;