import { useEffect, useState } from 'react';
import AccountCard from './AccountCard';

export default function SecurityAccount() {
  const [accounts, setAccounts] = useState([
    {
      companyName: '신한투자증권',
      accountName: '종합투자계좌',
      accountNumber: '000-0000-00000',
    },
    {
      companyName: '신한투자증권',
      accountName: '종합투자계좌',
      accountNumber: '100-0000-00000',
    },
  ]);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].accountNumber);

  useEffect(() => {
    console.log('증권 계좌', selectedAccount);
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
