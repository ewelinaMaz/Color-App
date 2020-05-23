import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalete} from './colorHelpers';
class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' render={() => <h1>Palette</h1>}  />
      <Route exact path='/palette/:id'/>
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalete(seedColors[1])}/>
      // </div>
    );
  }
}
export default App;
