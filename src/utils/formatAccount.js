export default function formatAccount(accountNumber) {
  const part1 = accountNumber.slice(0, 3);
  const part2 = accountNumber.slice(3, 5);
  const part3 = accountNumber.slice(5);

  return `${part1}-${part2}-${part3}`;
}
