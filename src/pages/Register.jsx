import { useState } from 'react';
import BankAccount from '../components/register/BankAccount';
import SecurityAccount from '../components/register/SecurityAccount';
import { BsArrowLeftShort } from 'react-icons/bs';
import LastOptions from '../components/register/LastOptions';

function Register() {
  const [currentRegister, setCurrentRegister] = useState(0);

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 p-2 bg-white z-10'>
        {currentRegister > 0 && (
          <BsArrowLeftShort
            size={32}
            className=' text-s-gray-300'
            onClick={() => setCurrentRegister((pre) => pre - 1)}
          />
        )}
      </header>
      <main>
        {currentRegister === 0 && <BankAccount nextPage={setCurrentRegister} />}
        {currentRegister === 1 && <SecurityAccount nextPage={setCurrentRegister} />}
        {currentRegister === 2 && <LastOptions />}
      </main>
    </div>
  );
}

export default Register;
