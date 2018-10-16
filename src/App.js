import React, { Component } from 'react';
import './App.css';
import Positioning from './components/Position/Positioning'
import Animation from './components/Animation/Animation'
import Boxmodel from './components/Boxmodel/Boxmodel'
import Fancy from './components/Fancyeffects/Fancy'
import Flexbox from './components/Flexbox/Flexbox'
import FloatandDisplay from './components/FloatandDisplay/FloatandDisplay'
import FontandBackground from './components/FontandBackground/FontandBackground'
import GridandVariables from './components/GridandVariables/GridandVariables'
import MediaQueries from './components/MediaQueries/MediaQueries'
import PseudoSelectors from './components/Pseudoselectors/PseudoSelectors'
import Selectors from './components/Selectors/Selectors'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Positioning />
          <Animation />
          <Boxmodel />
          <Fancy />
          <Flexbox />
          <FloatandDisplay />
          <FontandBackground />
          <GridandVariables />
          <MediaQueries />
          <PseudoSelectors />
          <Selectors />


        </header>
      </div>
    );
  }
}

export default App;
