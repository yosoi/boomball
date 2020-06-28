import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Game from './Game'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Scoreboard from './Scoreboard'

// pass callbacks into game
// these callbacks set app state
// pass app state into scoreboards
// in this way, scoreboards updates when game changes
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Game />
        </Col>
      </Row>
      <Row>
        <Col>
          <Scoreboard />
        </Col>
        <Col>
          <Scoreboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
