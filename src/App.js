import React, { useState, useEffect } from 'react';
import { map1, map2 } from './assets/Maps';
import Map from './components/map/Map';
import { addGoons, moveGoon } from './functions/gameFunctions.js';
import './App.css';

const date = new Date();
const App = () => {

  const [clockTick, setClockTick] = useState(1); // Game timer
  const [goons, setGoons] = useState([]); // List of all goons on screen, including their type
  const [round, setRound] = useState(1); // Current level of the game
  const [health, setHealth] = useState(150);

  let GAME_SPEED = 2;

  // Every time the game clock ticks, update the direction for every goon on screen
  useEffect(() => {
    const timer = setInterval(() => {
      setClockTick(clockTick + GAME_SPEED);
      let updatedGoons = [];

      for (let i = 0; i < goons.length; i++) {
        let currGoon = { ...goons[i] };

        if (currGoon.releaseTime > 0) {
          currGoon.releaseTime--;
          updatedGoons.push(currGoon);
        } else {
          let currTile = map1[currGoon.yAxis][currGoon.xAxis];

          // if the curr tile is out of the array, then the goon escaped,
          // make sure to remove this from the game health
          if (!currTile) {
            setHealth(health - currGoon.layers);
            break;
          }

          const newPos = moveGoon(currTile);
          currGoon.xAxis += newPos[1];
          currGoon.yAxis += newPos[0];

          updatedGoons.push(currGoon);

        }
      }

      setGoons(updatedGoons);

    }, 1000 * GAME_SPEED);
    return () => clearInterval(timer);
  });

  const startRound = () => {
    setGoons(addGoons(round));
  }

  return (
    <div>
      <Map layout={map1} />
      <p>{clockTick}</p>
      <button onClick={() => startRound()}>Start</button>
      <p>HEALTH: {health}</p>
    </div>
  )
}

export default App;
