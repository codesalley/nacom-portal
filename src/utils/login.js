import axios from 'axios';

const login = async () => {
  const data = await axios
    .get('https://nacomtest.herokuapp.com/', {
      index_number: '080062021A',
      password: 'testtest',
    })
    .then((res) => res);
  console.log(data);
};

export { login };
