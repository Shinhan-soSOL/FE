import { useState } from 'react';
import BankAccount from '../components/register/BankAccount';
import { Button } from '@mui/material';
import SecurityAccount from '../components/register/SecurityAccount';
import { BsArrowLeftShort } from 'react-icons/bs';
import ChangeOption from '../components/register/ChangeOption';
import StockOption from '../components/register/StockOption';
import { useNavigate } from 'react-router-dom';
import { postAccountsApi } from '../apis/api';
import { useAtomValue } from 'jotai';
import { accountRegisterAtom } from '../storages/storage';
import LastOptions from '../components/register/LastOptions';

function Register() {
  const [currentRegister, setCurrentRegister] = useState(0);

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 flex p-2'>
        {currentRegister > 0 && (
          <BsArrowLeftShort
            size={32}
            className=' text-s-gray-300'
            onClick={() => setCurrentRegister((pre) => pre - 1)}
          />
        )}
      </header>
      {/* <main className='p-5 pt-10'> */}
      <main>
        {currentRegister === 0 && <BankAccount nextPage={setCurrentRegister} />}
        {currentRegister === 1 && <SecurityAccount nextPage={setCurrentRegister} />}
        {currentRegister === 2 && <LastOptions />}
        {/* {currentRegister === 2 && (
          <div className='overflow-scroll'>
            <ChangeOption />
            <div className='h-6'></div>
            <StockOption />
          </div>
        )} */}
      </main>
      {/* <footer className='fixed max-w-[360px] px-6 w-full bottom-8'>
        <Button
          variant='contained'
          size='large'
          disableElevation
          className='w-full h-12'
          sx={{ fontSize: '18px' }}
          onClick={() => {
            if (currentRegister < 2) setCurrentRegister((pre) => pre + 1);
            else handleComplete();
          }}
        >
          {currentRegister < 2 ? '다음' : '완료'}
        </Button>
      </footer> */}
    </div>
  );
}

export default Register;
