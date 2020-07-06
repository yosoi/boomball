import onMessage from "./onMessage";
import Sockette from "sockette";

export default function (
  onArm,
  onCountdown,
  onClose,
  onError,
  onFire,
  onGhost,
  onInvite,
  onKick,
  onLose,
  onMaximum,
  onOpen,
  onReconnect,
  onStart,
  onWin
) {
  let matchId = undefined;
  const url = "wss://7cem59yyze.execute-api.us-east-1.amazonaws.com/dev";
  const network = new Sockette(url, {
    timeout: 5e3,
    maxAttempts: 10,
    onopen: onOpen,
    onmessage: (e) =>
      onMessage(
        e,
        onArm,
        onCountdown,
        onFire,
        onGhost,
        onInvite,
        onKick,
        onLose,
        onStart,
        onWin
      ),
    onreconnect: onReconnect,
    onmaximum: onMaximum,
    onclose: onClose,
    onerror: onError,
  });

  const send = (action, data) =>
    network.json({
      action: action,
      data: data,
    });

  this.arm = (x, y) =>
    send("arm", {
      matchId: matchId,
      x: x,
      y: y,
    });

  this.fire = (charge, x, y) =>
    send("fire", {
      charge: charge,
      matchId: matchId,
      x: x,
      y: y,
    });

  this.join = (bestStreak, currentStreak) =>
    send("join", {
      bestStreak: bestStreak,
      currentStreak: currentStreak,
      matchId: matchId,
    });

  this.score = () =>
    send("score", {
      matchId: matchId,
    });
}
