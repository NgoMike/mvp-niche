import React from 'react';

const GamesList = (props) => {
  return (
    <div className='gamesList'>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Fortnite`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/League%20of%20Legends`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/PLAYERUNKNOWN'S%20BATTLEGROUNDS`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Overwatch`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Heroes%20of%20the%20Storm`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Street%20Fighter%20V`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Music`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Music-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Path%20of%20Exile`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-429x572.jpg"/></button></div>
      <div><button onClick={() =>  window.location = `https://m.twitch.tv/directory/game/Hearthstone`}><img src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-272x363.jpg"/></button></div>
    </div>
  );
};

export default GamesList;