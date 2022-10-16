import { useEffect } from 'react';
import { AUTO, Game } from 'phaser';
import logo from './assets/react-logo.svg';
import { GAME_CONTENT_ID } from './utils/constants';
import MainScene from './game-scenes/MainScene';
import './App.css';

function App() {
  useEffect(() => {
    if (!window.phaserGame) {
      const config = {
        type: AUTO,
        parent: GAME_CONTENT_ID,
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
        <div id={GAME_CONTENT_ID} key={GAME_CONTENT_ID}>
          {/* this is where the game canvas will be rendered */}
        </div>
      </main>
    </div>
  );
}

export default App;
