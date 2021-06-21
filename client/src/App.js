import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/HomePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import ShotChartPage from './pages/ShotChartPage/ShotChartPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import WatchListPage from './pages/WatchListPage/WatchListPage';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/players' component={PlayersPage} />
      <Route path='/shotchart' component={ShotChartPage} />
      <Route path='/teams' component={TeamsPage} />
      <Route path='/watchlist' component={WatchListPage} />
    </Switch>
    </BrowserRouter>

  );
}

export default App;
