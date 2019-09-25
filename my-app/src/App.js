import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormExample from './FormExample';
import Tarjetas from './Tarjetas';
import { Container, Row, Col } from 'react-bootstrap';




function App() {
  return (
    <header className="App-header">
    <div className="App">
      <FormExample/>
      <br></br>
      <Container>
      <Row>
        <Col><Tarjetas/></Col>
        <Col><Tarjetas/></Col>
        <Col><Tarjetas/></Col>
      </Row>
      <br></br>
      <Row>
        <Col><Tarjetas/></Col>
        <Col><Tarjetas/></Col>
        <Col><Tarjetas/></Col>
      </Row>
      <br></br>
      
      </Container>
    </div>
    </header>
  );
};


export default App;
