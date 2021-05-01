const auth = async (url) => {
  const token = JSON.parse(localStorage.getItem('x-token'));
  if (!token) {
    return false;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token: token.token,
    },
  })
    .then((e) => e)
    .then((e) => e.json())
    .catch(() => {
      return false;
    });

  const data = await response;

  return data;
};

export default auth;
