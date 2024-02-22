import React from 'react';
import Navigation from '../components/nav';
import Header from '../components/header';
import Apropos from '../components/apropos';
import Portfolio from '../components/portfolio';

const Index = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Apropos />
            <Portfolio />
        </div>
    );
};

export default Index;