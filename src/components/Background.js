import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Background() {

    const noPadding = {
        padding: '0px',
    }

    const cardStyling = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

  return (
    <Row>
        <Col fluid className='custom-background-color' md={8} style={cardStyling}>
            <Card  >
                <Card.Body fluid className='custom-background-color' >
                    <Card.Text >
                        <h1>Order groceries for delivery or pickup today</h1>
                        <p>Whatever you want from local stores, brought right to your door</p>
                    </Card.Text>
                    <Form inline >
            
                    <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    className=" mr-sm-2"
                    />
      
        </Form>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} fluid className="custom" style={noPadding} >
            <Card fluid className='background-image'>
          
                    <Card.Img  variant="top" src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" style={noPadding} />
                
            </Card>
        </Col>
    </Row>
  );
}

export default Background;



