import { useEffect, useState } from 'react';
import Title from '../components/home/Title';
import formatCurrency from '../utils/formatCurrency';
import { Button, TextField } from '@mui/material';

export default function Payment() {
  const [balances, setBalances] = useState({
    bankBalance: 5000,
    secBalance: 2000,
    changeBalance: 750,
    changeOption: 1000,
  });
  const [tradePrice, setTradePrice] = useState();

  useEffect(() => {
    // api 연결
  }, []);

  return (
    <div className='w-full h-full bg-s-blue-50 flex flex-col gap-2 py-2 overflow-y-scroll'>
      {!balances && (
        <div className='w-full h-full flex justify-center items-center text-s-gray-200'>
          Loading...
        </div>
      )}
      {balances && (
        <>
          <div className='w-full p-4 px-5 bg-white'>
            <Title text='은행 계좌 잔액' />
            <div className='p-4'>
              <p className=' pt-1 font-extrabold text-3xl'>
                {formatCurrency(balances.bankBalance)}원
              </p>
            </div>
            <div className='flex justify-between items-center py-5'>
              <TextField
                id='outlined-number'
                size='small'
                type='number'
                variant='standard'
                placeholder='금액 입력'
                value={tradePrice}
                onChange={(e) => setTradePrice(e.target.value)}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                inputProps={{
                  style: { textAlign: 'right' }, // 여기서 오른쪽 정렬 적용
                }}
              />
              <Button
                variant='contained'
                size='small'
                disableElevation
                sx={{ fontSize: '14px' }}
                onClick={() => {
                  alert('결제');
                }}
              >
                결제
              </Button>
            </div>
            <div className='p-2 w-full flex flex-col gap-2 text-lg text-s-gray-400'>
              <div className='flex justify-between'>
                <p>예상 은행 잔액</p>
                <p className='font-bold'>
                  {tradePrice
                    ? formatCurrency(
                        balances.bankBalance -
                          tradePrice -
                          ((balances.bankBalance - tradePrice) % balances.changeOption)
                      )
                    : formatCurrency(balances.bankBalance)}
                  원
                </p>
              </div>
              <div className='flex justify-between'>
                <p>예상 증권 잔액</p>
                <p className='font-bold'>
                  {tradePrice
                    ? formatCurrency(
                        balances.secBalance +
                          ((balances.bankBalance - tradePrice) % balances.changeOption)
                      )
                    : formatCurrency(balances.secBalance)}
                  원
                </p>
              </div>
              <div className='flex justify-between'>
                <p>예상 모인 잔돈</p>
                <p className='font-bold'>
                  {tradePrice
                    ? formatCurrency(
                        balances.changeBalance +
                          ((balances.bankBalance - tradePrice) % balances.changeOption)
                      )
                    : formatCurrency(balances.changeBalance)}
                  원
                </p>
              </div>
            </div>
          </div>
          <div className='w-full p-4 px-5 bg-white'>
            <Title text='증권 계좌 잔액' />
            <div className='p-4'>
              <p className=' pt-1 font-extrabold text-3xl'>
                {formatCurrency(balances.secBalance)}원
              </p>
            </div>
          </div>
          <div className='w-full p-4 px-5 bg-white'>
            <Title text='모인 잔돈' />
            <div className='p-4'>
              <p className=' pt-1 font-extrabold text-3xl'>
                {formatCurrency(balances.changeBalance)}원
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
