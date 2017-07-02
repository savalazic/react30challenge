import React, { Component } from 'react';

import Key from './components/Key';

class App extends Component {

  componentWillMount() {

    window.addEventListener('keydown', (e) => {
      const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
      const key = document.querySelector(`.key[data-key='${e.keyCode}'`);

      if (!audio) return;

      audio.currentTime = 0;
      audio.play();

      key.classList.add('playing');

      key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
      });
    });

  }

  render() {
    return (
      <div className="App">
        
        <div className="keys">
          <Key 
            keyCode='65'
            button='A'
            sound='clap' />
          <Key 
            keyCode='83'
            button='S'
            sound='hihat' />
          <Key 
            keyCode='68'
            button='D'
            sound='kick' />
          <Key 
            keyCode='70'
            button='F'
            sound='openhat' />
          <Key 
            keyCode='71'
            button='G'
            sound='boom' />
          <Key 
            keyCode='72'
            button='H'
            sound='ride' />
          <Key 
            keyCode='74'
            button='J'
            sound='snare' />
          <Key 
            keyCode='75'
            button='K'
            sound='tom' />
          <Key 
            keyCode='76'
            button='L'
            sound='tink' />
        </div>

        <audio data-key="65" src="sounds/clap.wav"></audio>
        <audio data-key="83" src="sounds/hihat.wav"></audio>
        <audio data-key="68" src="sounds/kick.wav"></audio>
        <audio data-key="70" src="sounds/openhat.wav"></audio>
        <audio data-key="71" src="sounds/boom.wav"></audio>
        <audio data-key="72" src="sounds/ride.wav"></audio>
        <audio data-key="74" src="sounds/snare.wav"></audio>
        <audio data-key="75" src="sounds/tom.wav"></audio>
        <audio data-key="76" src="sounds/tink.wav"></audio>

      </div>
    );
  }
}

export default App;
