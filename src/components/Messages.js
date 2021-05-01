import { useEffect, useState } from 'react';
import auth from '../utils/auth';

const Message = ({ data }) => {
  const [pageData, setPagedata] = useState();
  const [loading, setLoading] = useState(true);
  const url = 'https://nacomtest.herokuapp.com/message';
  const getMessages = async () => {
    const data = await auth(url);
    setPagedata(data);
  };

  useEffect(() => {
    getMessages();
    return () => {
      getMessages();
    };
  }, []);
  console.log(pageData);

  return (
    <div>
      {data}
      <h2>Messages</h2>
    </div>
  );
};

export default Message;
