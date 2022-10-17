import { useEffect, useRef } from 'react';
import { CANVAS, Game } from 'phaser';
import logo from './assets/react-logo.svg';
import MainScene from './game-scenes/MainScene';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const config = {
        type: CANVAS,
        canvas: canvasRef.current,
        width: 800,
        height: 600,
        scene: MainScene
      };

      new Game(config);
    }
  }, [canvasRef]);

  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* this is where the game will be rendered */}
        <canvas ref={canvasRef} />
      </main>
    </div>
  );
}

export default App;
