import { Scene } from 'phaser';
// eslint-disable-next-line import/no-webpack-loader-syntax
import logoImg from '!!image-webpack-loader!../assets/phaser-logo.png';

class MainScene extends Scene
{
    preload() {
        this.load.image('logo', logoImg);
    }
      
    create() {
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}

export default MainScene;
