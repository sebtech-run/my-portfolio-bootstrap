import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';

import Bird from "../assets/images/bird.jpg"

import '../styles/style.css';


const Portfolio = () => {
    return (
        <Container>
         <Card.Title style ={{fontSize:35, color:'black', paddingBottom: 20}}>
               Mes projets
              </Card.Title>
        <Row xs={1} md={3} className="g-4">
      
          <Card className='card-portfolio'>
         
            <Card.Img variant="top" src={Bird} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='card-portfolio'>
         
         <Card.Img variant="top" src={Bird} />
         <Card.Body>
           <Card.Title>Card title</Card.Title>
           <Card.Text>
             This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.
           </Card.Text>
         </Card.Body>
       </Card>
       <Card className='card-portfolio'>
         
         <Card.Img variant="top" src={Bird} />
         <Card.Body>
           <Card.Title>Card title</Card.Title>
           <Card.Text>
             This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.
           </Card.Text>
         </Card.Body>
       </Card>

          
      
    </Row>
    </Container>
       
    );
};

export default Portfolio;