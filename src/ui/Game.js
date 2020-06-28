import React, { useEffect } from 'react';

export default function({
  id,
  onComponentReady,
  onConnected,
  onConnecting,
  onDisconnected,
  onScore,
  onWin
}) {
  useEffect(() => {
    window.addEventListener('onConnected', onConnected);
    window.addEventListener('onConnecting', onConnecting);
    window.addEventListener('onDisconnected', onDisconnected);
    window.addEventListener('onScore', onScore);
    window.addEventListener('onConnecting', onConnecting);
    onComponentReady(id);
    return () => {
      window.removeEventListener('onConnected', onConnected);
      window.removeEventListener('onConnecting', onConnecting);
      window.removeEventListener('onDisconnected', onDisconnected);
      window.removeEventListener('onScore', onScore);
      window.removeEventListener('onConnecting', onConnecting);
    };
  }, [
    id,
    onComponentReady,
    onConnected,
    onConnecting,
    onDisconnected,
    onScore,
    onWin
  ]);
  return (
    <div id={id}></div>
  );
}
