import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full relative'>
      <main className='w-full h-full flex flex-col justify-center items-center'>
        <div className=' font-shinhan-b text-2xl'>소SOL한 투자</div>
        <div className=' font-shinhan-l pt-2'>잔돈을 모아 투자에 성공하세요!</div>
        <div className=' text-s-gray-100 font-shinhan-l py-6'>
          거래 후 생긴 잔돈을 모아 <br />
          주식을 구매합니다
        </div>
        <img src='/images/landing_image.svg' width={246} height={246} />
      </main>
      <footer className='absolute w-full px-6 left-0 right-0 bottom-3 flex justify-center'>
        <Button
          variant='contained'
          disableElevation
          className='w-full'
          onClick={() => navigate('/register')}
        >
          시작하기
        </Button>
      </footer>
    </div>
  );
}

export default Landing;
