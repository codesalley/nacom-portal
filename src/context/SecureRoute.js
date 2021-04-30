import auth from '../utils/auth';

export default function SecureRoute({ children }) {
  const user = auth();
}
