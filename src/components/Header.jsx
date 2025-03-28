import { TbPigMoney } from "react-icons/tb";

function Header({ onNewExpense }) {
  return (
    <div className="flex flex-row items-center font-sans justify-between px-6 py-6">
      <div className="flex flex-row gap-x-1.5 items-center">
        <div className="px-2 py-2 bg-purple-500 text-white rounded-lg shadow-2xs">
          <TbPigMoney />
        </div>
        <span className="font-bold text-xl text-purple-500">Mint</span>
        <span className="font-normal text-xl text-gray-800">Wise</span>
      </div>
      <div className="flex w-[250px] h-8">
        <input type="text" placeholder="🔍 Search an expense" className="px-4 py-2 rounded-lg bg-gray-50 border-hidden text-[12px] w-full" />
      </div>
      <div className="ml-4">
        <button onClick={onNewExpense} className="px-4 py-2 rounded-md shadow-sm bg-purple-500 text-white text-[12px] font-medium cursor-pointer">
          + New Expense
        </button>
      </div>
    </div>
  );
}

export default Header;
