import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Game from './Game'
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Scoreboard from './Scoreboard'

// pass callbacks into game
// these callbacks set app state
// pass app state into scoreboards
// in this way, scoreboards update when game changes
function App() {
  const [p1BestStreak, setP1BestStreak] = useState(0);
  const [p1CurrentStreak, setP1CurrentStreak] = useState(0);
  const [p1Score, setP1Score] = useState(0);
  const [p2BestStreak, setP2BestStreak] = useState(0);
  const [p2CurrentStreak, setP2CurrentStreak] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  return (
    <Container>
      <Row>
        <Col>
          <Game />
        </Col>
      </Row>
      <Row>
        <Col>
          <Scoreboard
            bestStreak = {p1BestStreak}
            currentStreak = {p1CurrentStreak}
            score = {p1Score}/>
        </Col>
        <Col>
          <Scoreboard
            alignRight
            bestStreak = {p2BestStreak}
            currentStreak = {p2CurrentStreak}
            score = {p2Score}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
