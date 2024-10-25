import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 11000,
});

// 계좌 목록 조회
export async function getAccountsApi(id) {
  try {
    const response = await axios.get('/accounts', {
      params: {
        id: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// 현재가 조회(목표 종목 선택 화면 표시용)
export async function getOptionPriceApi() {
  try {
    const response = await axios.get('/option-price');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
