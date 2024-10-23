import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

function BankAccount() {
  const [accountNumber, setAccountNumber] = useState();
  const [selectedBank, setSelectedBank] = useState(0);

  useEffect(() => {
    console.log('계좌번호', accountNumber);
  }, [accountNumber]);

  useEffect(() => {
    console.log('은행', selectedBank);
  }, [selectedBank]);

  return (
    <div>
      <div className='font-shinhan-b text-s-blue-800 py-6 pb-8'>
        어느 계좌에서 잔돈을 가져올까요?
      </div>
      <div className='flex flex-col gap-8 px-4'>
        <TextField
          size='small'
          variant='standard'
          placeholder='계좌 번호 입력'
          onChange={(e) => setAccountNumber(e.target.value)}
          autoFocus
        ></TextField>
        <FormControl variant='standard' fullWidth margin='normal'>
          <Select
            label='은행 선택'
            id='bank-label'
            labelId='bank-label'
            size='small'
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <MenuItem disabled value={0}>
              <div className=' text-s-gray-100'>은행 선택</div>
            </MenuItem>
            <MenuItem value={10}>신한</MenuItem>
            <MenuItem value={20}>국민</MenuItem>
            <MenuItem value={30}>농협</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default BankAccount;
