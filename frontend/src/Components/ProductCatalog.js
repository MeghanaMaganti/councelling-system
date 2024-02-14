import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$29.99' },
    { id: 3, name: 'Product 3', price: '$39.99' },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Product Catalog</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCatalog;