import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Game from "./Game";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Scoreboard from "./Scoreboard";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function App({ onComponentReady }) {
  const [p1BestStreak, setP1BestStreak] = useState(0);
  const [p1CurrentStreak, setP1CurrentStreak] = useState(0);
  const [p1Score, setP1Score] = useState(0);
  const [p2BestStreak, setP2BestStreak] = useState(0);
  const [p2CurrentStreak, setP2CurrentStreak] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [game, setGame] = useState(0);

  const updateScore = (player) => {
    console.log(player);
    if (player === "p1") {
      setP1Score(p1Score + 1);
      console.log("p1 score updated" + p1Score);
    } else if (player === "p2") {
      setP2Score(p2Score + 1);
      console.log("p2 score updated" + p2Score);
    }
  };

  const alert = (text) => {
    toast(text, {
      className: "custom-alert",
      bodyClassName: "custom-alert-body",
    });
  };

  return (
    <div id='app' className='d-flex align-items-center'>
      <ToastContainer
        autoClose={1000}
        limit={4}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        position={"top-center"}
        className='mt-3'
      />
      <Container className='d-flex align-items-center flex-column'>
        <Row>
          {/* Button for testing alert */}
          {/* <Button onClick={() => alert("score")}>Test</Button> */}
          <Game
            id='boomball'
            onComponentReady={onComponentReady}
            onConnected={(e) => {
              console.log(e.detail + " connected");
            }}
            onConnecting={(e) => {
              console.log(e.detail + " connecting");
            }}
            onDisconnected={(e) => {
              console.log(e.detail + " disconnected");
            }}
            onScore={(e) => {
              console.log(`${e.detail} scores!`);
              updateScore(e.detail);
              alert(`${e.detail} SCORES!`);
            }}
            onWin={(e) => {
              console.log(e.detail + " won");
            }}
            game={game}
            setGame={setGame}
          />
        </Row>
        <Row className='w-100 justify-content-center'>
          <Scoreboard
            bestStreak={p1BestStreak}
            currentStreak={p1CurrentStreak}
            score={p1Score}
          />
          <Scoreboard
            alignRight
            bestStreak={p2BestStreak}
            currentStreak={p2CurrentStreak}
            score={p2Score}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
