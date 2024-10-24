export default function Title({ text, onClick }) {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-2'>
        <div className='text-lg font-shinhan-b'>{text}</div>
        {onClick && (
          <div
            onClick={() => {
              if (onClick) {
                console.log('버튼 제목');
                onClick();
              }
            }}
          >
            자세히보기
          </div>
        )}
      </div>
      <div className='text-s-gray-300'>수정</div>
    </div>
  );
}
