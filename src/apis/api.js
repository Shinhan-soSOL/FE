import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 11000,
});

// 계좌 목록 조회
export async function getAccountsApi() {
  try {
    const response = await axios.get('/accounts', {
      params: {
        id: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// 계좌, 매수 조건 등록
export async function postAccountsApi(data) {
  const { userId, bank, security, changeRange, stockCode, stockName } = data;

  try {
    const response = await axios.post('/accounts', {
      userId: 4,
      bank: bank,
      security: security,
      changeRange: changeRange,
      stockCode: stockCode,
      stockName: stockName,
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

// 계좌 정보, 잔돈 조회
export async function getChangeDataApi() {
  try {
    const response = await axios.get('/change-data', {
      params: {
        userId: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// 히스토리 조회
export async function getHistoryApi() {
  try {
    const response = await axios.get('/history', {
      params: {
        userId: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
