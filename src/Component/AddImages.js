import React, { useState } from 'react';
import { Row, Col, Button, Container} from 'react-bootstrap';
import RenderAllImages from './RenderAllImages';

const AddImages = () => {
  return (
    <>
      <Container>
        <RenderAllImages/>
      </Container>
    </>
  );
};

export default AddImages;
