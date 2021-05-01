import { useAuthContext } from './AuthContext';
import { Redirect, Route } from 'react-router-dom';

export default function SecureRoute({ component: Component, ...rest }) {
  const { student } = useAuthContext();

  return student ? (
    <Route
      {...rest}
      render={(props) => {
        <Component {...props} />;
      }}
    />
  ) : (
    <Redirect to='/login' />
  );
}
