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
  });

  console.log(response.json());
  const data = response.json();
  return data;
};

export default auth;
