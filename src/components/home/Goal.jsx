import Title from './Title';

export default function Goal({ data }) {
  const { stockName, currentPrice } = data;

  return (
    <div className='w-full p-4 px-5 bg-white'>
      <Title text='목표' />
      <div className='p-4'>
        <p className=' font-bold text-xl text-s-gray-400'>{stockName}</p>
        <p className=' pt-1 font-extrabold text-3xl'>{currentPrice}원</p>
      </div>
    </div>
  );
}
