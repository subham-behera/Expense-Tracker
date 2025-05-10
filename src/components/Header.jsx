import { TbPigMoney } from "react-icons/tb";

function Header({ onNewExpense, searchTerm, onSearchChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center font-sans justify-between px-4 md:px-6 py-4 md:py-6 gap-y-2">
      <div className="flex flex-row gap-x-1.5 items-center">
        <div className="px-2 py-2 bg-purple-500 text-white rounded-lg shadow-2xs">
          <TbPigMoney />
        </div>
        <span className="font-bold text-xl text-purple-500">Mint</span>
        <span className="font-normal text-xl text-gray-800">Wise</span>
      </div>
      <div className="flex w-full md:w-[250px] h-8">
        <input 
          type="text" 
          placeholder="🔍 Search an expense" 
          className="px-4 py-2 rounded-lg bg-gray-50 border-hidden text-[12px] w-full"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="mt-2 md:mt-0 md:ml-4">
        <button 
          onClick={onNewExpense} 
          className="px-4 py-2 rounded-md shadow-sm bg-purple-500 text-white text-[12px] font-medium cursor-pointer w-full md:w-auto"
        >
          + New Expense
        </button>
      </div>
    </div>
  );
}

export default Header;