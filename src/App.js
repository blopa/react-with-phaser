import { useEffect } from 'react';
import { AUTO, Game } from 'phaser';
import logo from './assets/react-logo.svg';
import MainScene from './game-scenes/MainScene';
import './App.css';

function App() {
  useEffect(() => {
    if (!window.phaserGame) {
      const config = {
        type: AUTO,
        parent: 'game-content',
        width: 800,
        height: 600,
        scene: MainScene
      };

      window.phaserGame = new Game(config);
    }
  }, []);

  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
