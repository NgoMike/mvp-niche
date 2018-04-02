import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GamesList from './gamesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Fortnite', 'League of Legends', 'PubG', 'Overwatch', 'Heroes of the Storm', 'Street Fighter', 'Music', 'Path of Exile', 'Hearthstone'],
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='niche'>Niche<span>"Find your gaming niche."</span></div>
        <div><GamesList games={this.state.data} /></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
