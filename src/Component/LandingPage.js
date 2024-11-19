import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../CSS/Landingpage.css'; // Optionally add CSS file for additional styling
import { useNavigate } from 'react-router-dom';


export default function LandingPage(props) {
  const Navi=useNavigate();
  return (
    <>
      <Container fluid className="landing-banner g-0">
        <Row className="align-items-center">
          <Col className="text-center">
            <h3 className="display-4 font-weight-bold" style={{ color: "#333" }}>
              Design with Us
            </h3>
            <p style={{ color: "#555", fontSize: "1.2rem" }}>
              Create custom products effortlessly!
            </p>
          </Col>
          <Col className="text-center">
            <img 
              src=".\assests\nav4.png" 
              alt="Banner" 
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="text-center mt-5">
        <h2 className="mb-4" style={{ fontWeight: "bold",color: "rgb(255 255 255)" }}>Choose Any</h2>
        <Row className="justify-content-center">
          <Col md={4} className="product-option">
            <Button variant="outline-info" className="product-button" onClick={() => Navi("/shirt")}>
              <img
                src= {`${process.env.PUBLIC_URL}/assests/shirtTemplate.jfif`}
                alt="Shirt"
                className="product-image"
              />
              <div className="overlay">
                <span>Custom Shirt</span>
              </div>
            </Button>
          </Col>
          <Col md={4} className="product-option">
            <Button variant="outline-info" className="product-button" onClick={() => Navi("/mug")}>
              <img
                src={`${process.env.PUBLIC_URL}/assests/mugTemplate.jfif`}
                alt="Mug"
                className="product-image"
              />
              <div className="overlay">
                <span>Custom Mug</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
