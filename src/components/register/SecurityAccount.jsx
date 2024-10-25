import { useEffect, useState } from 'react';
import AccountCard from './AccountCard';
import { getAccountsApi } from '../../apis/api';

export default function SecurityAccount() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    const userId = 1;
    getAccountsApi(userId).then((res) => {
      setAccounts(res.secAccounts);
    });
  }, [selectedAccount]);

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
                setSelectedAccount(account.accountNumber);
              }}
            >
              <AccountCard {...account} selected={account.accountNumber === selectedAccount} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
