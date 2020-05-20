import './style.css';
import * as p5 from 'p5';

const s = sk => {

  // sk.translate(window.innerWidth/2,window.innerHeight/2);


  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);

    sk.loadImage('src/assets/images/heart.png', img => {
      sk.image(img, 490, 100);
    });



  };

  sk.draw = () => {

  };

};
const P5 = new p5(s);

