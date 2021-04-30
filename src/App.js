import LoginPage from './components/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Message from './components/Messages';
import Result from './components/Result';
import Announcements from './components/Announcement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/'>
          <Announcements data={<NavBar />} />
        </Route>
        <Route path='/messages'>
          <Message data={<NavBar />} />
        </Route>
        <Route path='/result'>
          <Result data={<NavBar />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
