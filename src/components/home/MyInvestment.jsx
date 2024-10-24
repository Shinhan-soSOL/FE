import { useState } from 'react';
import Title from './Title';
import { PieChart } from '@mui/x-charts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

export default function MyInvestment({ data }) {
  const { totalValue, profitRatio, myStocks } = data;

  // const items = [
  //   {
  //     data: myStocks[0],
  //     value: 20,
  //     label: '하이넥스',
  //   },
  //   { data: myStocks[1], value: myStocks, label: 'LG전자' },
  //   { data: myStocks[2], value: 10, label: '삼성전자' },
  // ];

  const chartData = data.myStocks.map((item) => ({
    ...item,
    value: item.quantity,
    label: item.stockName,
  }));

  const formatObject = (obj) => {
    if (obj === null) {
      return '  undefined';
    }
    return JSON.stringify(obj, null, 2)
      .split('\n')
      .map((l) => `  ${l}`)
      .join('\n');
  };

  const [identifier, setIdentifier] = useState(null);
  const [id, setId] = useState(undefined);
  const handleClick = (event, itemIdentifier, item) => {
    setId(item.code);
    setIdentifier(itemIdentifier);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <div className='w-full p-4 px-5 bg-white'>
      <Title
        text='내 투자'
        onClick={() => {
          alert('히스토리 이동');
        }}
      />
      <header className='p-4 flex flex-col justify-center items-center gap-1'>
        <p className=' text-sm text-s-gray-300'>총 보유 주식 자산</p>
        <p className=' font-extrabold text-3xl'>{totalValue}원</p>
        <p className=' '>수익률 {profitRatio}%</p>
      </header>
      <main className='py-4 w-full h-100'>
        <div>{`item id: ${id ?? 'undefined'} \n\nitem identifier:${formatObject(identifier)}`}</div>
        <div className='flex justify-center'>
          <PieChart
            series={[
              {
                data: chartData,
              },
            ]}
            colors={colors}
            onItemClick={handleClick}
            width={200}
            height={300}
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
                <TableCell align='left' sx={{ color: '#4F4F4F' }}>
                  종목명
                </TableCell>
                <TableCell align='right' sx={{ color: '#4F4F4F' }}>
                  내 평균
                </TableCell>
                <TableCell align='right' sx={{ color: '#4F4F4F' }}>
                  현재가
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData.map((stock, i) => (
                <TableRow key={stock.code}>
                  <TableCell>
                    <div className='flex gap-2 items-center'>
                      <div style={{ backgroundColor: `${colors[i]}` }} className={`w-3 h-3`}></div>
                      {stock.stockName}
                    </div>
                  </TableCell>
                  <TableCell align='right'>{stock.avgPrice}</TableCell>
                  <TableCell align='right'>{stock.currentPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </footer>
    </div>
  );
}
