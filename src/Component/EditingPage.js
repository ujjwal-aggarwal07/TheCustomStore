import React, { useState } from 'react';
import Color from './Color';
import AddText from './AddText';
import { Col, Container, Row } from 'react-bootstrap';
import ViewPage from './ViewPage';
import AddImages from './AddImages';
import TopSideBar from './SideBar';
import UploadContent from './UploadContent';


const EditingPage = ({type}) => {
  const [color,setColor]= useState("red");
  const [selection, setSelection] = useState("color");

  console.log(selection);
  return (
    <>
    <Container>
      <Row>
        <Col>
          <div>EditingPage {type} </div>
         <ViewPage color={color} type={type}></ViewPage>
         </Col>
        <Col>
          <TopSideBar selection={selection} setSelection={setSelection}/>
          {selection === "color" && <ColorComp color={color} setColor={setColor}/>}
          {selection === "text" && <TextComp/>}
          {selection === "image" && <AddImages/>}
          {selection === "upload" && <UploadContent/>}
        </Col>
      </Row>
    </Container>
    </>
  )
}


const ColorComp = ({color, setColor}) => {
  return (
    <>
      <Color setColor={setColor}/>
      <h1 style={{color:color}}>{color}</h1>
    </>
  );
}

const TextComp = (props) => {
  return(
    <>
    <p style={{color:"white"}}>Text Component
      <br/>
    <input  type="text" placeholder='enter text here' />
    </p></>
  )
}

export default EditingPage;