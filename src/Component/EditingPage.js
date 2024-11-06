import React, { useState } from 'react'
import Color from './Color'
import { Col, Container, Row } from 'react-bootstrap';
import ViewPage from './ViewPage';

export default function EditingPage({type}) {
    const [color,SetColor]= useState("red");
  return (
    <>

<Container>

      <Row>
        <Col><div>EditingPage {type} </div>
        <ViewPage color={color} type={type}></ViewPage>
        </Col>
        
        <Col>
              <Row>
                   <Color setColor={SetColor}/>
                   <h1 style={{color:color}}>{color}</h1>
              </Row>
              <Row>ss</Row>
              <Row>sss</Row>
        </Col>
      </Row>
    </Container>
    
  
 
  </>
  )
}
