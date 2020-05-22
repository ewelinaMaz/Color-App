import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalete} from './colorHelpers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalete(seedColors[4])}/>
      </div>
    );
  }
}
export default App;
