import React from 'react';
import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import GamesPage from './pages/gamespage/gamespage.component';
import SignUpSignIn from './pages/signupsignin/signupsignin.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/games" component={GamesPage} />
            <Route path="/signin" component={SignUpSignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
