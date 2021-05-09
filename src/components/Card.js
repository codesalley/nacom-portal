import nurse from '../assets/pngegg.png';
import { Redirect } from 'react-router-dom';
import MessageSvg from '../assets/message.svg';
import './Card.css';

const Card = ({ data }) => {
  return data && !data.msg ? (
    data.map((v, i) => {
      return (
        <div
          className='main-card flex gap-3 bg-white rounded p-2 mx-auto mt-3 '
          key={i}
        >
          <img alt='nurse logo' className='nurse-logo' src={MessageSvg} />

          <div className='body'>
            <p className='text-gray-600 font-medium'>{v.title}</p>
            <p className='text-gray-600 text-xs font-medium'>{v.details}</p>
            <small className='italic text-gray-400 font-semibold'>
              {v.created_at.split('T')[0]}
            </small>
          </div>
        </div>
      );
    })
  ) : (
    <Redirect to='/login' />
  );
};

export default Card;
