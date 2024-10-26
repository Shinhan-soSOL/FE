import { useEffect, useState } from 'react';
import Title from '../components/home/Title';
import formatCurrency from '../utils/formatCurrency';
import { Box, Button, Modal, TextField } from '@mui/material';
import { getBalanceApi, postMakeMoneyApi } from '../apis/api';

export default function Payment() {
  const [balances, setBalances] = useState({
    bankBalance: 5000,
    secBalance: 2000,
    changeBalance: 750,
    balanceSize: 1000,
  });
  const [tradePrice, setTradePrice] = useState('');
  const [open, setOpen] = useState(false);
  const [inputPw, setInputPw] = useState('');
  const [errorPw, setErrorPw] = useState(false);
  const pwMaxLength = import.meta.env.VITE_PAY_PW.length;

  useEffect(() => {
    getBalanceApi().then((res) => {
      setBalances(res);
    });
  }, []);

  useEffect(() => {
    if (inputPw.length === pwMaxLength) {
      if (inputPw === import.meta.env.VITE_PAY_PW) {
        postMakeMoneyApi(tradePrice)
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        setErrorPw(true);
      }
    } else {
      setErrorPw(false);
    }
  }, [inputPw]);

  function handleClose() {
    setOpen(false);
    setInputPw('');
  }

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
                  style: { textAlign: 'right' },
                }}
              />
              <Button
                variant='contained'
                size='small'
                disableElevation
                sx={{ fontSize: '14px' }}
                onClick={() => {
                  if (!tradePrice || tradePrice === 0) {
                    alert('금액을 입력해주세요');
                  } else if (tradePrice > balances.bankBalance) {
                    alert('잔액보다 적게 입력해주세요');
                    setTradePrice('');
                  } else {
                    setOpen(true);
                  }
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
                          ((balances.bankBalance - tradePrice) % balances.balanceSize)
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
                          ((balances.bankBalance - tradePrice) % balances.balanceSize)
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
                          ((balances.bankBalance - tradePrice) % balances.balanceSize)
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
          <Modal
            open={open}
            onClose={(event, reason) => {
              if (reason !== 'backdropClick') {
                handleClose(); // 모달 밖을 클릭했을 때는 닫히지 않음
              }
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
              <div className='flex flex-col gap-2'>
                <div className='self-center font-shinhan'>비밀번호를 입력해주세요</div>
                <div className='py-4 pb-8 flex justify-center items-center gap-2'>
                  {Array.from({ length: pwMaxLength }).map((_, i) => {
                    return (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i + 1 <= inputPw.length ? ' bg-s-blue-500' : ' bg-s-gray-100'
                        }`}
                      ></div>
                    );
                  })}
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='self-center'>
                  <TextField
                    error={errorPw}
                    helperText={errorPw ? '비밀번호가 일치하지 않습니다' : ''}
                    maxRows={pwMaxLength}
                    type='password'
                    variant='standard'
                    autoComplete='current-password'
                    placeholder='비밀번호 입력'
                    value={inputPw}
                    onChange={(e) => {
                      if (e.target.value.length <= pwMaxLength) {
                        setInputPw(e.target.value);
                      }
                    }}
                    sx={{ fontSize: '20px' }}
                  />
                </form>
              </div>
              <button className='text-sm pt-8 self-center text-s-gray-100' onClick={handleClose}>
                취소
              </button>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}
