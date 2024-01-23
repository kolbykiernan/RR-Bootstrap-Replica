import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
        <Navbar.Brand>
            <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
        </Navbar.Brand>
        <Form inline >
            <Row >
                <Col xs="auto" style = {{width: '800px'}}>
                    <Form.Control
                    type="text"
                    placeholder="Search Products and Stores"
                    className=" mr-sm-2"
                    />
                </Col>
            </Row>
        </Form>
        <Row>
          <Col xs="auto">
            <Button variant="light" type="submit">Log in</Button>
          </Col>
          <Col xs="auto">
            <Button variant="success" type="submit">Sign up</Button>
          </Col>
          </Row>
    </Navbar>
  );
}

export default NavBar;









// function NavBar() {
//     return (
//         <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary justify-content-between">
//             <Container>
//             <Navbar.Brand>
//                 <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id ="basic-navbar-nav">
//             <Form inline>
//                 <Form.Control
//                     type="search"
//                     placeholder="Search Products and Stores"
//                     className="me-2"
//                     aria-label="Search"
//                 />
//             </Form>
//             <Nav>
//                 <Nav.Link>Log in</Nav.Link>
//                 <Button variant="success" >Sign up</Button>
//             </Nav>    
//             </Navbar.Collapse> 
//             </Container>   
//         </Navbar>
//     );
// }

// export default NavBar;


