import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';
import { accountRegisterAtom, bankNameAtom } from '../../storages/storage';

function BankAccount({ nextPage }) {
  const [accountNumber, setAccountNumber] = useAtom(accountRegisterAtom);
  const [selectedBank, setSelectedBank] = useAtom(bankNameAtom);

  // useEffect(() => {
  //   console.log('계좌번호', accountNumber);
  // }, [accountNumber]);

  // useEffect(() => {
  //   console.log('은행', selectedBank);
  // }, [selectedBank]);

  return (
    <div className='w-full h-full'>
      <main className='p-5 pt-10'>
        <div className='font-shinhan-b text-lg text-s-blue-800 py-6 pb-8'>
          어느 계좌에서 잔돈을 가져올까요?
        </div>
        <div className='flex flex-col gap-8 px-4'>
          <TextField
            variant='standard'
            placeholder='계좌 번호 입력'
            value={accountNumber.bank}
            onChange={(e) =>
              setAccountNumber((accountRegister) => ({ ...accountRegister, bank: e.target.value }))
            }
            autoFocus
          ></TextField>
          <FormControl variant='standard' fullWidth margin='normal'>
            <Select
              label='은행 선택'
              id='bank-label'
              labelId='bank-label'
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <MenuItem disabled value='은행 선택'>
                <div className=' text-s-gray-100'>은행 선택</div>
              </MenuItem>
              <MenuItem value='신한'>신한</MenuItem>
              <MenuItem value='국민'>국민</MenuItem>
              <MenuItem value='농협'>농협</MenuItem>
            </Select>
          </FormControl>
        </div>
      </main>
      <footer className='fixed max-w-[360px] px-6 w-full bottom-8'>
        <Button
          variant='contained'
          size='large'
          disableElevation
          className='w-full h-12'
          sx={{ fontSize: '18px' }}
          onClick={() => {
            nextPage((pre) => pre + 1);
          }}
        >
          다음
        </Button>
      </footer>
    </div>
  );
}

export default BankAccount;
