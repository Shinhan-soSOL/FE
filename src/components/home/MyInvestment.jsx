import { useState } from 'react';
import Title from './Title';
import { PieChart } from '@mui/x-charts';
import {
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import formatCurrency from '../../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';

const colors = ['#5351DB', '#8151DB', '#51A6DB'];

export default function MyInvestment({ data }) {
  const navigate = useNavigate();
  const { totalValue, profitRatio, myStocks } = data;
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedStockColor, setSelectedStockColor] = useState(null);
  const chartData = myStocks.map((item) => ({
    ...item,
    value: item.quantity,
    label: item.stockName,
  }));

  // const handleClick = (event, itemIdentifier, item) => {
  //   console.log(itemIdentifier);
  //   console.log(item.stockCode);
  //   console.log(item.stockName);
  //   console.log(item.quantity);
  //   console.log(item.investedAmount);
  //   console.log(item.profit);
  //   console.log(item.total);
  // };

  const [open, setOpen] = useState(false);
  const handleOpenModal = (stock, idx) => {
    console.log(stock);
    setSelectedStock(stock);
    setSelectedStockColor(colors[idx]);
    setOpen(true);
  };

  return (
    <div className='w-full p-4 px-5 bg-white'>
      <Title text='내 투자' onClick={() => navigate('/investment/history')} hasEdit={false} />
      <header className='pt-4 flex flex-col justify-center items-center gap-1'>
        <p className=' text-sm text-s-gray-300'>총 보유 주식 자산</p>
        <p className=' font-extrabold text-3xl'>{formatCurrency(totalValue)}원</p>
        <p className=' '>수익률 {profitRatio}%</p>
      </header>
      <main className='py-4 w-full'>
        <div className='flex justify-center'>
          <PieChart
            series={[
              {
                paddingAngle: 3,
                innerRadius: 50,
                outerRadius: 100,
                data: chartData,
              },
            ]}
            colors={colors}
            // onItemClick={handleClick}
            width={180}
            height={220}
            margin={{ right: 0 }}
            legend={{ hidden: true }}
          />
        </div>
      </main>
      <footer>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  align='left'
                  sx={{ fontSize: '14px', paddingX: '8px', color: '#777777' }}
                >
                  종목명
                </TableCell>
                <TableCell
                  align='right'
                  sx={{ fontSize: '14px', paddingX: '8px', color: '#777777' }}
                >
                  수량
                </TableCell>
                <TableCell
                  align='right'
                  sx={{
                    fontSize: '14px',
                    color: '#777777',
                    paddingX: '8px',
                    wordBreak: 'keep-all',
                  }}
                >
                  평균 구매가
                </TableCell>
                <TableCell
                  align='right'
                  sx={{ fontSize: '14px', paddingX: '8px', color: '#777777' }}
                >
                  현재가
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData.map((stock, i) => (
                <TableRow
                  hover
                  key={stock.stockCode}
                  sx={{ border: 'none', '& td': { border: 'none' } }}
                  onClick={() => {
                    handleOpenModal(stock, i);
                  }}
                >
                  <TableCell sx={{ fontSize: '12px', paddingY: '28px' }}>
                    <div className='flex gap-2 items-center'>
                      <div
                        style={{ backgroundColor: `${colors[i]}` }}
                        className={`w-2 h-2 rounded-full`}
                      ></div>
                      {stock.stockName}
                    </div>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px', paddingX: '8px' }} align='right'>
                    {stock.quantity}주
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      paddingX: '8px',
                      fontSize: '12px',
                      color: `${
                        stock.avgPrice - stock.currentPrice === 0
                          ? '#4e4e4e '
                          : stock.avgPrice - stock.currentPrice > 0
                          ? '#5B9DFF'
                          : '#FF5B5B'
                      }}`,
                    }}
                  >
                    <div className='font-lg' style={{ position: 'relative' }}>
                      {formatCurrency(stock.avgPrice)}
                      <p
                        style={{
                          position: 'absolute',
                          top: '100%', // 가격 아래에 위치
                          right: '0',
                          fontSize: '12px',
                        }}
                      >
                        ({stock.profitRatio > 0 && '+'}
                        {`${formatCurrency(stock.profitRatio)}%`})
                      </p>
                    </div>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px', paddingX: '8px' }} align='right'>
                    {formatCurrency(stock.currentPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedStock && (
          <Modal
            open={open}
            onClose={() => {
              setSelectedStock(null);
              setOpen(false);
            }}
          >
            <Box
              className='flex flex-col gap-2 max-w-[360px] w-[90%] px-8 py-8 bg-white rounded-lg shadow-sm'
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                outline: 'none',
              }}
            >
              <div className=' text-lg font-bold'>{selectedStock.stockName}</div>
              <hr className='pb-2'></hr>
              <div className='flex justify-between items-center'>
                <p className='flex justify-center items-center gap-2 text-s-gray-100'>
                  보유 수량
                  <p
                    style={{ backgroundColor: `${selectedStockColor}` }}
                    className={`w-2 h-2 rounded-full`}
                  ></p>
                </p>
                <p className=' font-bold' style={{ color: `${selectedStockColor}` }}>
                  {selectedStock.quantity}주
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=' text-s-gray-100'>투자 금액</p>
                <p className=' font-bold text-s-gray-400'>
                  {formatCurrency(selectedStock.investedAmount)}원
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=' text-s-gray-100'>수익</p>
                {selectedStock.profit === 0 && (
                  <p className=' font-bold text-s-gray-400'>
                    {formatCurrency(selectedStock.profit)}원
                  </p>
                )}
                {selectedStock.profit > 0 && (
                  <p className=' font-bold text-ch-red '>
                    +{formatCurrency(selectedStock.profit)}원
                  </p>
                )}
                {selectedStock.profit < 0 && (
                  <p className=' font-bold text-ch-blue  '>
                    {formatCurrency(selectedStock.profit)}원
                  </p>
                )}
              </div>
              <div className='flex justify-between items-center'>
                <p className=' text-s-gray-100'>총 금액</p>
                <p className=' font-bold text-s-gray-400'>
                  {formatCurrency(selectedStock.total)}원
                </p>
              </div>
            </Box>
          </Modal>
        )}
      </footer>
    </div>
  );
}
