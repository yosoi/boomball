import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Game from './Game'
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Scoreboard from './Scoreboard'

function App({onComponentReady}) {
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
          <Game
            id="boomball"
            onComponentReady={onComponentReady}
            onConnected={(player) => {
              console.log(player + " connected");
            }}
            onConnecting={(player) => {
              console.log(player + " connecting");
            }}
            onDisconnected={(player) => {
              console.log(player + " disconnected");
            }}
            onScore={(player) => {
              console.log(player + " scored");
            }}
            onWin={(player) => {
              console.log(player + " won");
            }}/>
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
