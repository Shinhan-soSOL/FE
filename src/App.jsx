import { useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/landing');
  }, []);

  return <div className='w-full h-full font-shinhan'></div>;
}

export default App;
