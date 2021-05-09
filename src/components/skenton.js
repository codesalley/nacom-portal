import './Skeleton.css';

const Skenton = () => {
  return (
    <div className='main-card mx-auto mt-2 rounded-md p-4 mb-7  w-full '>
      <div className='border animate-pulse border-gray-300 shadow mt-2 rounded-md p-4  w-full mx-auto'>
        <div className='animate-pulse flex space-x-4'>
          <div className='animate-pulse rounded-full bg-gray-400 h-12 w-12'></div>
          <div className='flex-1 space-y-4 py-1'>
            <div className='h-4 bg-gray-400 rounded w-3/4'></div>
            <div className='space-y-2'>
              <div className='h-4 bg-gray-400 rounded'></div>
              <div className='h-4 bg-gray-400 rounded w-5/6'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skenton;
