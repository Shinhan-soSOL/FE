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
import { useEffect, useState } from 'react';
import formatCurrency from '../utils/formatCurrency';
import { getHistoryApi } from '../apis/api';

export default function History() {
  const [tradings, setTradings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHistoryApi().then((res) => {
      setTradings(res.tradings);
    });
  }, []);

  function formatDate(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${month}.${day}`;
  }

  function formatTime(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(' ');
    const [hour, minute] = timePart.split(':');
    return `${hour}:${minute}`;
  }

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 p-2 bg-white z-10'>
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
              {tradings.map((trading, i) => (
                <TableRow
                  hover
                  key={trading.stockCode}
                  sx={{ border: 'none', '& td': { border: 'none', verticalAlign: 'top' } }}
                >
                  <TableCell>
                    <div className=' text-s-gray-400 opacity-80 font-bold'>
                      {formatDate(trading.tradeDate)}
                    </div>
                    <div className=' text-xs text-s-gray-100'>{formatTime(trading.tradeDate)}</div>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-3 items-center'>{trading.stockName}</div>
                  </TableCell>
                  <TableCell align='right'>
                    <div>{trading.tradeCount}주</div>
                  </TableCell>
                  <TableCell align='right'>
                    <div>{formatCurrency(trading.tradePrice)}원</div>
                    <div className='text-xs text-s-gray-100'>
                      {formatCurrency(trading.resultChange)}원
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
