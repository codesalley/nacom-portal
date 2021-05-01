import LoginPage from './components/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Message from './components/Messages';
import Result from './components/Result';
import Announcements from './components/Announcement';
import { AuthProvider } from './context/AuthContext';
import SecureRoute from './context/SecureRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />

          <SecureRoute exact path='/' component={Announcements} />
          <Route path='/messages'>
            <Message />
          </Route>
          <Route path='/result'>
            <Result />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
