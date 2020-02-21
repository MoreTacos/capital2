import React from 'react';
import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import GamesPage from './pages/gamespage/gamespage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Test</div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/games" component={GamesPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
