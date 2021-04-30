const auth = (token) => {};

export default function SecureRoute({ children }) {
  const token = localStorage.getItem('x-token');
}
