import { IoIosArrowForward } from 'react-icons/io';

export default function Title({ text, onClick, hasEdit = false }) {
  return (
    <div className='flex justify-between items-center'>
      <div
        className='flex items-center gap-2'
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <div className='text-lg font-shinhan-b'>{text}</div>
        {onClick && <IoIosArrowForward size={20} className=' text-s-gray-300' />}
      </div>
      {hasEdit && (
        <div className=' font-sm text-s-gray-300' onClick={() => alert('준비중')}>
          수정
        </div>
      )}
    </div>
  );
}
