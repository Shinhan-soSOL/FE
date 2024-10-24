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

const colors = ['#5351DB', '#8151DB', '#51A6DB'];

export default function MyInvestment({ data }) {
  const { totalValue, profitRatio, myStocks } = data;
  const [selectedStock, setSelectedStock] = useState(null);
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
  const handleOpenModal = (stock) => {
    setSelectedStock(stock);
    setOpen(true);
  };

  return (
    <div className='w-full p-4 px-5 bg-white'>
      <Title
        text='내 투자'
        onClick={() => {
          alert('히스토리 이동');
        }}
      />
      <header className='pt-4 flex flex-col justify-center items-center gap-1'>
        <p className=' text-sm text-s-gray-300'>총 보유 주식 자산</p>
        <p className=' font-extrabold text-3xl'>{formatCurrency(totalValue)}원</p>
        <p className=' '>수익률 {profitRatio}%</p>
      </header>
      <main className='py-4 w-full h-100'>
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
              {chartData.map((stock, i) => (
                <TableRow
                  hover
                  key={stock.stockCode}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => {
                    handleOpenModal(stock);
                  }}
                >
                  <TableCell>
                    <div className='flex gap-2 items-center'>
                      <div style={{ backgroundColor: `${colors[i]}` }} className={`w-3 h-3`}></div>
                      {stock.stockName}
                    </div>
                  </TableCell>
                  <TableCell align='right'>{formatCurrency(stock.avgPrice)}</TableCell>
                  <TableCell align='right'>{formatCurrency(stock.currentPrice)}</TableCell>
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
            <div
              className='max-w-[360px] w-[90%] p-4 bg-white rounded-lg shadow-sm'
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {selectedStock.stockName}
            </div>
          </Modal>
        )}
      </footer>
    </div>
  );
}
