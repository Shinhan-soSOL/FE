import { FormControl, ListItemText, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { getOptionPriceApi } from '../../apis/api';
import { useAtom } from 'jotai';
import { accountRegisterAtom } from '../../storages/storage';

export default function StockOption() {
  const [stocks, setStocks] = useState([]);
  const [registerAtom, setRegisterAtom] = useAtom(accountRegisterAtom);
  // const [stockName, setStockName] = useState('종목 선택');
  // const [stockCode, setStockCode] = useState('-');

  useEffect(() => {
    getOptionPriceApi().then((res) => {
      setStocks(res.stocks);
    });
  }, []);

  useEffect(() => {
    console.log(registerAtom);
  }, [registerAtom]);

  // useEffect(() => {
  //   console.log('종목명', stockName);
  // }, [stockName]);

  // useEffect(() => {
  //   console.log('종목코드', stockCode);
  // }, [stockCode]);

  return (
    <div className='w-full'>
      <header>
        <div className='font-shinhan-b text-lg text-s-blue-800 pt-6 pb-2 '>어떤 종목을 살까요?</div>
        <div className='font-shinhan text-s-gray-100 pb-8 break-keep'>
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
            value={registerAtom.stockName}
            onChange={(event) => {
              // setStockName(event.target.value);
              setRegisterAtom((accountRegister) => ({
                ...accountRegister,
                stockName: event.target.value,
              }));
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
            {stocks.length === 0 && <div className='p-4 text-s-gray-200'>Loading...</div>}
            {stocks.length > 0 &&
              stocks.map((stock) => (
                <MenuItem
                  key={stock.stockCode}
                  value={stock.stockName}
                  className='w-full'
                  onClick={() => {
                    // setStockCode(stock.stockCode);
                    setRegisterAtom((accountRegister) => ({
                      ...accountRegister,
                      stockName: stock.stockName,
                      stockCode: stock.stockCode,
                    }));
                  }}
                >
                  <div className='flex flex-col'>
                    <ListItemText primary={stock.stockName} />
                    <div className='text-sm text-s-gray-100'>{stock.currentPrice}원</div>
                  </div>
                </MenuItem>
              ))}
            {stocks.length > 0 && (
              <MenuItem
                key='000000'
                value='자동 구매 안함'
                className='w-full'
                onClick={() => {
                  // setStockCode('000000');
                  setRegisterAtom((accountRegister) => ({
                    ...accountRegister,
                    stockName: '자동 구매 안함',
                    stockCode: '000000',
                  }));
                }}
              >
                <div className='flex flex-col'>
                  <ListItemText primary='자동 구매 안함' />
                  <div className='text-sm text-s-gray-100'>잔돈을 저축할게요</div>
                </div>
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </main>
    </div>
  );
}
