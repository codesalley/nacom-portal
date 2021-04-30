import LoginPage from './components/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Message from './components/Messages';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/messages'>
          <Message />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
