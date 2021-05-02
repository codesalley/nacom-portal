import nurse from '../assets/pngegg.png';

const Card = ({ data }) => {
  return data.map((v, i) => {
    return (
      <div
        className='main-card flex gap-3 bg-white rounded p-3 mx-auto mt-3 max-w-sm '
        key={i}
      >
        <img alt='nurse logo' className='nurse-logo' src={nurse} />
        <div className='body'>
          <p>{v.title}</p>
          <p>{v.details}</p>
          <small>{v.created_at}</small>
        </div>
      </div>
    );
  });
};

export default Card;
