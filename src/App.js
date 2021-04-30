import LoginPage from './components/LoginPage'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <LoginPage />
       </Route>
    </Router>

  );
}

export default App;
