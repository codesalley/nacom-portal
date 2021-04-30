import LoginPage from './components/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/'>
        <LoginPage />
      </Route>
    </Router>
  );
}

export default App;
