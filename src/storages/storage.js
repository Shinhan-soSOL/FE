import { atom } from 'jotai';

// 계좌, 매수 조건 등록
export const accountRegisterAtom = atom({
  userId: null,
  bank: '',
  security: '',
  changeRange: 1000,
  stockCode: '',
  stockName: '종목 선택',
});

export const bankNameAtom = atom('은행 선택');
