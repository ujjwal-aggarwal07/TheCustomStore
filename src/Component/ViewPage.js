import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function ViewPage(props) 
{
  if(props.type==="mug")
  {
    var img="./assests/Whitemug.png";
  }
  else
  {
     img="./assests/Tshirt_"+props.color+".png";
  }
  return (
    <>
    
    <Container className="mb-3">
      <Row className="mb-3">
        <img style={{height: "400px",width: "520px"}} src={img} alt="shirt" />
      </Row>
      <Row>
      <Col className="w-100">
        <Button className="imageAction">Save</Button>
       </Col>
       <Col className="w-100">
        <Button className="imageAction">Get Quote</Button>
        </Col>
        </Row>
    </Container>
    
    </>
    

  )
}
