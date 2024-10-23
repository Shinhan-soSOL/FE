import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useEffect, useState } from 'react';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(({ theme }) => ({
  variants: [
    {
      props: { checked: true },
      style: {
        '.MuiFormControlLabel-label': {
          color: theme.palette.primary.main,
        },
      },
    },
    {
      props: { checked: false },
      style: {
        '.MuiFormControlLabel-label': {
          color: theme.palette.gray.light,
        },
      },
    },
  ],
}));

export default function ChangeOption() {
  const [selectedChange, setSelectedChange] = useState('1000');

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    useEffect(() => {
      // radioGroup.value와 props.value가 일치할 때만 상태를 업데이트
      if (checked) {
        setSelectedChange(props.value);
      }
    }, [checked, props.value]);

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  useEffect(() => {
    console.log('잔돈 단위', selectedChange);
  }, [selectedChange]);

  return (
    <div className='w-full'>
      <header>
        <div className='font-shinhan-b text-s-blue-800 pt-6 pb-2 '>
          잔돈 단위를 얼마로 정할까요?
        </div>
        <div className='w-[230px] text-xs font-shinhan text-s-gray-100 pb-2'>
          거래 발생마다 지정된 단위로 계좌의 잔액을 정리하고, 남은 돈을 잔돈으로 활용합니다.
        </div>
        <div className='w-[280px] text-[10px] font-shinhan-l text-s-gray-100 pb-8'>
          (ex.1000원 미만) 잔액 5,400원 → 잔액 5,000원, 잔돈 400원
        </div>
      </header>
      <main>
        <RadioGroup name='use-radio-group' defaultValue='1000'>
          <MyFormControlLabel value='1000' label='1000원 미만' control={<Radio size='small' />} />
          <MyFormControlLabel value='100' label='100원 미만' control={<Radio size='small' />} />
        </RadioGroup>
      </main>
    </div>
  );
}
