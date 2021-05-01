import { useAuthContext } from './AuthContext';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';

export default function SecureRoute({ component: Component, ...rest }) {
  const { student } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return student ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    ></Route>
  );
}
