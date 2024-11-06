import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ViewPage(props) 
{
  if(props.type==="mug")
  {
    var img="./assests/Whitemug.png";
  }
  else
  {
     img="./assests/tshirt_"+props.color+".png";
  }
  return (
    <>
    
    <Container>
       <Row>
      <img style={{height: "auto",width: "520px"}} src={img} alt="shirt" />
      </Row>
      <br/>
      <br/>
      <Row >
        <Col>
      <button  style={{
          color:"white",
          borderColor:"#008B8B",
          marginLeft: "20px",
          borderRadius: "12px",
          backgroundColor: "#008B8B",
          padding:"0px 30px"}}> 
        SAVE
       </button>
       </Col>
       <Col>
       <button  style={{
          color:"white",
          borderColor:"#008B8B",
          marginLeft: "20px",
          borderRadius: "12px",
          backgroundColor: "#008B8B",
          padding:"0px 30px"}}> 
        GET A QUOTE      </button>
        </Col>
        </Row>
    </Container>
    
    </>
    

  )
}
