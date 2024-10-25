import { useEffect, useState } from 'react';
import AccountCard from './AccountCard';
import { getAccountsApi } from '../../apis/api';
import { useAtom, useSetAtom } from 'jotai';
import { accountRegisterAtom } from '../../storages/storage';

export default function SecurityAccount() {
  const [accounts, setAccounts] = useState([]);
  const [accountNumber, setAccountNumber] = useAtom(accountRegisterAtom);

  useEffect(() => {
    const userId = 1;
    getAccountsApi(userId).then((res) => {
      setAccounts(res.secAccounts);
    });
  }, []);

  useEffect(() => {
    console.log('atom', accountNumber);
  }, [accountNumber]);

  return (
    <div className='w-full'>
      <div className='font-shinhan-b text-lg text-s-blue-800 py-6 pb-8'>
        어느 계좌에 잔돈을 채울까요?
      </div>
      <ul className='flex flex-col gap-4'>
        {accounts.map((account) => {
          return (
            <li
              key={account.accountNumber}
              onClick={() => {
                setAccountNumber((accountRegister) => ({
                  ...accountRegister,
                  security: account.accountNumber,
                }));
              }}
            >
              <AccountCard
                {...account}
                selected={accountNumber.security === account.accountNumber}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
