import { Button } from '@mui/material';

function MyButton({ title, isLoading = false }) {
  return (
    <div className='absolute w-full px-6 left-0 right-0 bottom-3 flex justify-center'>
      <Button variant='contained' disableElevation className='w-full'>
        {title}
      </Button>
    </div>
  );
}

export default MyButton;
