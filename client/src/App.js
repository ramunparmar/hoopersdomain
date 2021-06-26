import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/players/:playerID' component={PlayersPage} />
      <Route path='/players' exact component={PlayersPage} />
      <Route path='/search/:playerID' component={SearchResults} />
      <Route path='/team/:teamID' component={TeamsPage} />
    </Switch>
    </BrowserRouter>

  );
}

export default App;
