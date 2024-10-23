import { FormControl, ListItemText, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

export default function StockOption() {
  const [stocks, setStocks] = useState([
    {
      stockName: '삼성전자',
      stockCode: '111111',
      currentPrice: 56000,
    },
    {
      stockName: 'LG전자',
      stockCode: '111112',
      currentPrice: 58000,
    },
    {
      stockName: 'SK하이넥스',
      stockCode: '111113',
      currentPrice: 67000,
    },
  ]);
  const [stockName, setStockName] = useState('종목 선택');
  const [stockCode, setStockCode] = useState('-');

  useEffect(() => {
    console.log('종목명', stockName);
  }, [stockName]);

  useEffect(() => {
    console.log('종목코드', stockCode);
  }, [stockCode]);

  return (
    <div className='w-full'>
      <header>
        <div className='font-shinhan-b text-s-blue-800 pt-6 pb-2 '>어떤 종목을 살까요?</div>
        <div className='w-[205px] text-xs font-shinhan text-s-gray-100 pb-8'>
          해당 종목을 구매할 수 있을 만큼 잔돈이 모이면 자동으로 구매가 진행됩니다.
        </div>
      </header>
      <main>
        <FormControl variant='standard' fullWidth margin='normal'>
          <Select
            label='종목 선택'
            id='bank-label'
            labelId='bank-label'
            size='small'
            value={stockName}
            onChange={(event) => {
              console.log(event);
              setStockName(event.target.value);
            }}
            renderValue={(selected) => {
              if (selected === '종목 선택') {
                return <span style={{ color: 'gray' }}>종목 선택</span>;
              }
              return selected;
            }}
          >
            <MenuItem disabled value='종목 선택'>
              <div className='text-s-gray-100'>종목 선택</div>
            </MenuItem>
            {stocks.map((stock) => (
              <MenuItem
                key={stock.stockCode}
                value={stock.stockName}
                className='w-full'
                onClick={() => {
                  setStockCode(stock.stockCode);
                }}
              >
                <div className='flex flex-col'>
                  <ListItemText primary={stock.stockName} />
                  <div className='text-xs text-s-gray-100'>{stock.currentPrice}원</div>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </main>
    </div>
  );
}
