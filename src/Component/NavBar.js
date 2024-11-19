
import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
// import './NavBar.css'; // Optionally, include a CSS file for additional styling if needed.
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const linkTo = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "60px" }}>
      <Container fluid className="justify-content-between">
        <Navbar.Brand onClick={() => linkTo("/")} style={{ cursor: 'pointer' }}>
          <img
            src="./assests/Custom_store.png"
            alt="logo"
            style={{ height: "40px", paddingRight: "15px" }}
          />
          Custom Store
        </Navbar.Brand>

        <div>
          <Button onClick={() => linkTo("/login")}
            variant="outline-light"
            style={{
              marginRight: "15px",
              fontWeight: "bold",
              padding: "5px 15px"
            }}
          >
            Login
          </Button>

          <Button
            variant="info"
            style={{
              fontWeight: "bold",
              color: "white",
              padding: "5px 30px",
              borderRadius: "20px"
            }}
          >
            Start Now
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
