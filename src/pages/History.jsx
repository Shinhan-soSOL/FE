import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Title from '../components/home/Title';

export default function History() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full'>
      <header className='fixed m-auto max-w-[360px] w-full h-10 flex p-2'>
        <BsArrowLeftShort size={32} className=' text-s-gray-300' onClick={() => navigate(-1)} />
      </header>
      <main className='p-5 pt-10'>
        <div className='py-6 pb-8'>
          <Title text='주문 내역' hasEdit={false} />
        </div>
      </main>
    </div>
  );
}
