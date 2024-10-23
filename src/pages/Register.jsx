import { useState } from 'react';
import BankAccount from '../components/register/BankAccount';
import { Button } from '@mui/material';
import SecurityAccount from '../components/register/SecurityAccount';
import { BsArrowLeftShort } from 'react-icons/bs';
import Option from '../components/register/Option';

function Register() {
  const [currentRegister, setCurrentRegister] = useState(0);
  return (
    <div className='w-full h-full relative '>
      <header className='w-full h-10 flex p-2'>
        {currentRegister > 0 && (
          <BsArrowLeftShort
            size={32}
            className=' text-s-gray-300'
            onClick={() => setCurrentRegister((pre) => pre - 1)}
          />
        )}
      </header>
      <main className='p-5'>
        {currentRegister === 0 && <BankAccount />}
        {currentRegister === 1 && <SecurityAccount />}
        {currentRegister === 2 && <Option />}
      </main>
      <footer className='absolute w-full px-6 left-0 right-0 bottom-3 flex justify-center'>
        <Button
          variant='contained'
          disableElevation
          className='w-full'
          onClick={() => {
            if (currentRegister < 2) setCurrentRegister((pre) => pre + 1);
            else alert('홈으로 이동');
          }}
        >
          {currentRegister < 2 ? '다음' : '완료'}
        </Button>
      </footer>
    </div>
  );
}

export default Register;
