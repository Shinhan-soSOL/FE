import formatCurrency from '../../utils/formatCurrency';
import Title from './Title';

export default function MyChange({ data }) {
  const { changeSum, changeAmount, investedAmount, goal } = data;

  return (
    <div className='w-full p-4 px-5 bg-white'>
      <Title text='잔돈' hasEdit />
      <div className='p-4'>
        <p className=' font-extrabold text-3xl'>{formatCurrency(changeAmount)}원</p>
        <p className=' pt-1 text-s-gray-300'>
          {goal.currentPrice - changeAmount < 0
            ? `다음 장까지 기다려주세요`
            : `목표까지 ${formatCurrency(goal.currentPrice - changeAmount)}원 남았어요!`}
        </p>
        <div className='w-full pt-5 text-s-blue-900 opacity-60 flex flex-col gap-1'>
          <div className='flex justify-between'>
            <p>누적 금액</p>
            <p>{formatCurrency(changeSum)}원</p>
          </div>
          <div className='flex justify-between'>
            <p>투자된 금액</p>
            <p>{formatCurrency(investedAmount)}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
