import Events from "../events/Events";
import React, { useEffect } from "react";

export default function ({
  id,
  onComponentReady,
  onConnected,
  onConnecting,
  onDisconnected,
  onScore,
  onWin,
  game,
  setGame,
}) {
  useEffect(() => {
    const e = new Events();
    e.onConnected(onConnected, true);
    e.onConnecting(onConnecting, true);
    e.onDisconnected(onDisconnected, true);
    e.onScore(onScore, true);
    e.onWin(onWin, true);

    if (!game) {
      setGame({ game: onComponentReady(id) });
    }

    return () => {
      e.onConnected(onConnected, false);
      e.onConnecting(onConnecting, false);
      e.onDisconnected(onDisconnected, false);
      e.onScore(onScore, false);
      e.onWin(onWin, false);
    };
  }, [
    id,
    onComponentReady,
    onConnected,
    onConnecting,
    onDisconnected,
    onScore,
    onWin,
    game,
    setGame,
  ]);
  return <div className='mt-1' id={id}></div>;
}
