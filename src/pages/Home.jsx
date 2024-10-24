import { useState } from 'react';
import Goal from '../components/home/Goal';

export default function Home() {
  const [data, setData] = useState({
    changeSum: 990,
    changeAmount: 30,
    investedAmount: 3400,
    totalValue: 1333,
    profitRatio: 12,
    goal: {
      stockName: '삼성전자',
      stockCode: '111111',
      currentPrice: 45000,
    },
    myStocks: [
      {
        stockName: '삼성전자',
        stockCode: '111111',
        quantity: 2,
        investedAmount: 87000,
        profit: 13,
        total: 897000,
        avgPrice: 46000,
        profitRatio: 15.4,
        currentPrice: 56000,
      },
    ],
  });
  return (
    <div className='w-full h-full bg-s-blue-50 flex flex-col gap-2'>
      <Goal data={...data.goal} />
    </div>
  );
}
