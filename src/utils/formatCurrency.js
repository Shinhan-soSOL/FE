export default function formatCurrency(value) {
  // 천 단위로 콤마(,) 찍기
  return typeof value === 'number' ? value.toLocaleString('en-US') : value;
}
