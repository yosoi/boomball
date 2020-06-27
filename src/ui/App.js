import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Game from './Game'
import React from 'react'
import Row from 'react-bootstrap/Row'

function App({game}) {
  return (
    <Container>
      <Row>
        <Col>
          <Game id={game.id}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
