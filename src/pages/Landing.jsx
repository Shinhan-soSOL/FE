import MyButton from '../components/MyButton';

function Landing() {
  return (
    <div className='w-full h-full relative'>
      <main className='w-full h-full flex flex-col justify-center items-center'>
        <div className=' font-shinhan-b text-2xl'>소SOL한 투자</div>
        <div className=' font-shinhan-l pt-2'>잔돈을 모아 투자에 성공하세요!</div>
        <div className=' text-s-gray-100 font-shinhan-l py-6'>
          거래 후 생긴 잔돈을 모아 <br />
          주식을 매수할 수 있습니다
        </div>
        <img src='/images/landing_image.svg' width={246} height={246} />
      </main>
      <MyButton title='시작하기' />
    </div>
  );
}

export default Landing;
