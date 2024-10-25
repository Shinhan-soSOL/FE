import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Title from '../components/home/Title';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import formatCurrency from '../utils/formatCurrency';

export default function History() {
  const [data, setData] = useState({
    tradings: [
      {
        stockName: '삼성전자',
        tradingDate: '2024-10-21',
        tradingTime: '11:04',
        tradingPrice: 1500,
        changeAmount: 1450,
        tradingQuantity: 1,
      },
      {
        stockName: '삼성전자',
        tradingDate: '2024-10-21',
        tradingTime: '11:04',
        tradingPrice: 1000,
        changeAmount: 3050,
        tradingQuantity: 1,
      },
    ],
  });
  const navigate = useNavigate();

  function formatDate(dateString) {
    // '2024-10-24' -> '10.24'
    const parts = dateString.split('-');
    return `${parts[1]}.${parts[2]}`;
  }

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 flex p-2'>
        <BsArrowLeftShort size={32} className=' text-s-gray-300' onClick={() => navigate(-1)} />
      </header>
      <main className='p-5 pt-10'>
        <div className='py-6'>
          <Title text='주문 내역' hasEdit={false} />
        </div>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align='left' sx={{ color: '#777777' }}>
                  날짜
                </TableCell>
                <TableCell align='left' sx={{ color: '#777777' }}>
                  종목명
                </TableCell>
                <TableCell align='right' sx={{ color: '#777777' }}>
                  수량
                </TableCell>
                <TableCell align='right' sx={{ color: '#777777' }}>
                  가격
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.tradings.map((trading, i) => (
                <TableRow
                  hover
                  key={trading.stockCode}
                  sx={{ border: 'none', '& td': { border: 'none', verticalAlign: 'top' } }}
                >
                  <TableCell>
                    <div className=' text-s-gray-400 opacity-80 font-bold'>
                      {formatDate(trading.tradingDate)}
                    </div>
                    <div className=' text-xs text-s-gray-100'>{trading.tradingTime}</div>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-3 items-center'>{trading.stockName}</div>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-3 items-center'>{trading.tradingQuantity}주</div>
                  </TableCell>
                  <TableCell align='right'>
                    <div>{formatCurrency(trading.tradingPrice)}원</div>
                    <div className='text-xs text-s-gray-100'>
                      {formatCurrency(trading.changeAmount)}원
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
}
