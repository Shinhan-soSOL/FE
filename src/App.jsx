import './App.css';
import Landing from './pages/Landing';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <div className='w-full h-full font-shinhan'>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
