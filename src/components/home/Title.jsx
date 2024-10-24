import { IoIosArrowForward } from 'react-icons/io';

export default function Title({ text, onClick }) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <div
          className='text-lg font-shinhan-b'
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          {text}
        </div>
        {onClick && <IoIosArrowForward size={20} className=' text-s-gray-300' />}
      </div>
      {!onClick && <div className=' font-sm text-s-gray-300'>수정</div>}
    </div>
  );
}
