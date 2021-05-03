const login = async (indexNumber, password) => {
  try {
    const data = await fetch('https://nacomtest.herokuapp.com/student', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        index_number: indexNumber,
        password: password,
      }),
    });
    const token = await data.json();
    if (token.msg === 'invalid credentials') {
      return false;
    }
    if (token) {
      localStorage.setItem('x-token', JSON.stringify(token));
      return true;
    }
    return false;
  } catch (error) {}
};

export { login };
