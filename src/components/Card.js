import nurse from '../assets/pngegg.png';
import { Redirect } from 'react-router-dom';
import './Card.css';

const Card = ({ data }) => {
  return data && !data.msg ? (
    data.map((v, i) => {
      return (
        <div
          className='main-card flex gap-3 bg-white rounded p-2 mx-auto mt-3 '
          key={i}
        >
          <img alt='nurse logo' className='nurse-logo' src={nurse} />
          <div className='body'>
            <p>{v.title}</p>
            <p>{v.details}</p>
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
