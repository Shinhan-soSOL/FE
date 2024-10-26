import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full '>
      <main className='w-full h-full flex flex-col justify-center items-center'>
        <div className=' font-shinhan-b text-3xl'>소SOL한 투자</div>
        <div className=' font-shinhan-l pt-2'>잔돈을 모아 투자에 성공하세요!</div>

        <img src='/images/landing_image.svg' width={246} height={246} className='my-8' />
        <div className=' text-s-gray-200 font-shinhan-l py-6 text-center'>
          거래 후 생긴 잔돈을 모아 <br></br>주식을 구매할 수 있습니다
        </div>
      </main>
      <footer className='fixed max-w-[360px] px-6 w-full bottom-8'>
        <Button
          variant='contained'
          size='large'
          disableElevation
          className='w-full h-12'
          sx={{ fontSize: '18px' }}
          onClick={() => navigate('/register')}
        >
          시작하기
        </Button>
      </footer>
    </div>
  );
}

export default Landing;
