import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Listings() {

    const borderRadius = {
        borderRadius: '50px'
        
    
    }

  return (
    

    <Container style={{ marginTop: "40px", textAlign: "center", display: 'flex' }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", }} >
        <Row style={{ display: 'flex' }}>
            <Col xs=".5" >
                <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" />

            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
     
        <Row style={{ display: 'flex' }}>
            <Col xs=".5">
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/648/25d6c55a-67f5-4689-a8b2-9e349d80a04a.png" />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Target</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
    </Row>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", }} >
        <Row style={{ display: 'flex' }}>
            <Col xs=".5" >
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/161/02dde074-d001-40fc-8d04-319bb80af9df.png" />

            </Col>
            <Col >
                <h5 style={{ fontWeight: "bold" }}>Stater Bros</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    
    
        <Row style={{ display: 'flex' }}>
            <Col xs=".5" >
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" />

            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
    </Row>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row style={{ display: 'flex' }}>
            <Col xs=".5">
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
  
        <Row style={{ display: 'flex' }}>
            <Col xs=".5" >
            <img style ={borderRadius} src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png" />

            </Col>
            <Col >
                <h5 style={{ fontWeight: "bold" }}>Albertsons</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
  );
}

export default Listings;

{/* <Container>
        <h2>Browse stores in Houston</h2>
      <Row>
        <Col  >
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" />
        </Col>
        
        <Col >
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/648/25d6c55a-67f5-4689-a8b2-9e349d80a04a.png" />
        </Col>
        <Col>
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/161/02dde074-d001-40fc-8d04-319bb80af9df.png" />
        </Col>
      </Row>
      <Row>
      <Col>
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" />
        </Col>
        <Col>
            <img style ={borderRadius} src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" />
        </Col>
        <Col>
            <img style ={borderRadius} src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png" />
        </Col>
      </Row>
    </Container> */}