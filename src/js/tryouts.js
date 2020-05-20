import './style.css';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';


const mic = new p5.AudioIn();
mic.enabled();
const s = sk => {
  sk.setup = () => {
    const cnv = sk.createCanvas(window.innerHeight, window.innerWidth);
    cnv.sk.mousePressed(sk.userStartAudio);
    mic.start();
  };

  sk.draw = () => {
    const micLevel = mic.getLevel();
    console.log(micLevel);
  };
};

const P5 = new p5(s);
P5();

