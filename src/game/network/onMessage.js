export default function (
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
) {
  const message = JSON.parse(e.data);
  const data = message.body;
  switch (message.action) {
    case "arm":
      onArm(data.x, data.y);
      break;
    case "countdown":
      onCountdown();
      break;
    case "fire":
      onFire(data.charge, data.x, data.y);
      break;
    case "ghost":
      onGhost();
      break;
    case "invite":
      onInvite(data.matchId);
      break;
    case "kick":
      onKick();
      break;
    case "lose":
      onLose();
      break;
    case "start":
      onStart();
      break;
    case "win":
      onWin();
      break;
    default:
      throw new Error("Unsupported message action:", message.action);
  }
}
