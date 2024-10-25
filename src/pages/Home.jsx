import { useEffect, useState } from 'react';
import Goal from '../components/home/Goal';
import MyChange from '../components/home/MyChange';
import MyInvestment from '../components/home/MyInvestment';
import { getChangeDataApi } from '../apis/api';

export default function Home() {
  const [homeData, setHomedata] = useState();

  useEffect(() => {
    getChangeDataApi()
      .then((res) => {
        setHomedata(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className='w-full h-full bg-s-blue-50 flex flex-col gap-2 py-2 overflow-y-scroll'>
      {!homeData && (
        <div className='w-full h-full flex justify-center items-center text-s-gray-200'>
          Loading...
        </div>
      )}
      {homeData && (
        <>
          <Goal data={homeData.goal} />
          <MyChange data={homeData} />
          <MyInvestment data={homeData} />
          <footer>
            <div className='p-2 py-4 text-center text-s-gray-200'>
              <p className='font-bold'>ⓒ SOSOL</p>
              <p>김경륜, 김득호, 이원규, 임세현</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
