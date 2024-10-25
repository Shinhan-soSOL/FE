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

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 flex p-2'>
        <BsArrowLeftShort size={32} className=' text-s-gray-300' onClick={() => navigate(-1)} />
      </header>
      <main className='p-5 pt-10'>
        <div className='py-6 pb-8'>
          <Title text='주문 내역' hasEdit={false} />
        </div>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align='left' sx={{ color: '#777777' }}>
                  종목명
                </TableCell>
                <TableCell align='right' sx={{ color: '#777777' }}>
                  내 평균
                </TableCell>
                <TableCell align='right' sx={{ color: '#777777' }}>
                  현재가
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.tradings.map((trading, i) => (
                <TableRow
                  hover
                  key={trading.stockCode}
                  sx={{ border: 'none', '& td': { border: 'none' } }}
                  onClick={() => {
                    handleOpenModal(trading, i);
                  }}
                >
                  <TableCell sx={{ fontSize: '16px', paddingY: '28px' }}>
                    <div className='flex gap-3 items-center'>
                      <div style={{ backgroundColor: `${colors[i]}` }} className={`w-3 h-3`}></div>
                      {trading.stockName}
                    </div>
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      color: `${
                        trading.avgPrice - trading.currentPrice === 0
                          ? '#4e4e4e '
                          : trading.avgPrice - trading.currentPrice > 0
                          ? '#FF5B5B'
                          : '#5B9DFF'
                      }}`,
                    }}
                  >
                    <div className='font-lg' style={{ position: 'relative' }}>
                      {formatCurrency(trading.avgPrice)}{' '}
                      <p
                        style={{
                          position: 'absolute',
                          top: '100%', // 가격 아래에 위치
                          right: '0',
                          fontSize: '12px',
                        }}
                      >
                        ({trading.profitRatio > 0 && '+'}
                        {`${formatCurrency(trading.profitRatio)}%`})
                      </p>{' '}
                    </div>
                  </TableCell>
                  <TableCell align='right'>{formatCurrency(trading.currentPrice)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
}
