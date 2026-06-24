import { FiGrid } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';
import { GrCreditCard } from 'react-icons/gr';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { PiBankBold } from 'react-icons/pi';

function Navbar({ onFilterByCategory, selectedCategory }) {
  const categories = [
    { name: "All", value: null, icon: <FiGrid className="w-3.5 h-3.5" /> },
    { name: "Cash", value: "Cash", icon: <MdAccountBalanceWallet className="w-3.5 h-3.5" /> },
    { name: "Bank", value: "Bank Account", icon: <PiBankBold className="w-3.5 h-3.5" /> },
    { name: "Card", value: "Credit Card", icon: <GrCreditCard className="w-3.5 h-3.5" /> },
    { name: "Savings", value: "Savings", icon: <FaMoneyBill className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="flex flex-row items-center gap-x-2 px-6 py-3.5 overflow-x-auto border-b border-slate-100 bg-white no-scrollbar select-none">
      {categories.map((cat) => {
        // Handle cases where selectedCategory might be matching cat.value
        const isSelected = (selectedCategory === cat.value);
        return (
          <button
            key={cat.name}
            onClick={() => onFilterByCategory(cat.value)}
            className={`flex items-center gap-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap ${
              isSelected 
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 border border-transparent" 
                : "bg-slate-50 text-slate-500 border border-slate-200/50 hover:bg-slate-100 hover:text-slate-700"
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;