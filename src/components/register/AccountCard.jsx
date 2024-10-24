export default function AccountCard({ companyName, accountName, accountNumber, selected }) {
  return (
    <div
      className={`w-full p-3 rounded-lg flex flex-col gap-2 ${
        selected ? 'bg-s-blue-100 border-2 border-blue-600' : 'bg-white border-2'
      }`}
    >
      <div className={`font-shinhan-b ${selected ? 'text-s-blue-900' : 'text-s-gray-300'}`}>
        {companyName}
      </div>
      <div className={`text-sm opacity-60 ${selected ? 'text-s-blue-900' : 'text-s-gray-400'}`}>
        {accountName}
      </div>
      <div
        className={`text-xs opacity-50 pt-2 ${selected ? 'text-s-blue-900' : 'text-s-gray-400'}`}
      >
        {accountNumber}
      </div>
    </div>
  );
}
