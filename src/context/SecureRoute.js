import { useAuthContext } from './AuthContext';
import { Redirect, Route } from 'react-router-dom';

export default function SecureRoute({ component: Component, ...rest }) {
  const { student } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        student ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    ></Route>
  );
}
