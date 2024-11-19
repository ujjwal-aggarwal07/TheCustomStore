import React from 'react';
import { Card, CardBody } from 'react-bootstrap';

const CustomCard = ({children}) => {
    return (
      <Card style={{
          width:"100%", 
          height:"150px",
          border: "none",
          borderRadius: "0px"
          }}>
        <CardBody style={{
          textAlign: "center",
          width: "100%",
          padding: "0",
          height: "100%"
          }}>
          {children}
        </CardBody>
      </Card>
    );
}

export default CustomCard;