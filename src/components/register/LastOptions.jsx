import ChangeOption from './ChangeOption';
import StockOption from './StockOption';
import { Button } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { redirect, useNavigate } from 'react-router-dom';
import { postAccountsApi } from '../../apis/api';
import { accountRegisterAtom } from '../../storages/storage';

export default function LastOptions() {
  const [registerData, setRegisterData] = useAtom(accountRegisterAtom);
  const navigate = useNavigate();

  function handleComplete() {
    postAccountsApi(registerData)
      .then((res) => {
        navigate('/home', { replace: true });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className='w-full h-full overflow-scroll '>
      <main className='p-5 pt-10'>
        <ChangeOption />
        <div className='h-6'></div>
        <StockOption />
      </main>
      <footer className='fixed max-w-[360px] px-6 w-full bottom-8'>
        <Button
          variant='contained'
          size='large'
          disableElevation
          className='w-full h-12'
          sx={{ fontSize: '18px' }}
          onClick={handleComplete}
        >
          완료
        </Button>
      </footer>
    </div>
  );
}
