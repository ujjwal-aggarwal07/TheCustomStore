// import React from 'react'
// import { Container} from 'react-bootstrap'

// export default function NavBar({handleLogoClick}) {
//   return (
//     <>
//       <Container fluid style={{height:"50px",paddingTop:"5px"}}>
//        <img src="./assests/Custom_store.png" alt="logo" onClick={() => handleLogoClick(null)}/>
//        <button  style={{color:"Black",marginLeft:"70%",backgroundColor:"transparent",
//     border:"none"}}> 
//         Login
//        </button>
//        <button  style={{
//           color:"white",
//           borderColor:"#008B8B",
//           marginLeft: "20px",
//           borderRadius: "12px",
//           backgroundColor: "#008B8B",
//           padding:"0px 30px"}}> 
//         Start Now
//        </button>


//       </Container>
//     </>
//   )
// }

import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
// import './NavBar.css'; // Optionally, include a CSS file for additional styling if needed.

export default function NavBar({ handleLogoClick }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "60px" }}>
      <Container fluid className="justify-content-between">
        <Navbar.Brand onClick={() => handleLogoClick(null)} style={{ cursor: 'pointer' }}>
          <img
            src="./assests/Custom_store.png"
            alt="logo"
            style={{ height: "40px", paddingRight: "15px" }}
          />
          Custom Store
        </Navbar.Brand>

        <div>
          <Button
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
