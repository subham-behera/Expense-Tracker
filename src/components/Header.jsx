import { TbPigMoney } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

function Header({ searchTerm, onSearchChange }) {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-5 border-b border-slate-100/80 bg-white gap-x-4">
      {/* Brand Logo */}
      <div className="flex flex-row gap-x-2 items-center">
        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
          <TbPigMoney className="w-5 h-5" />
        </div>
        <div className="flex items-baseline">
          <span className="font-extrabold text-lg text-slate-900 tracking-tight">Mint</span>
          <span className="font-medium text-lg text-slate-400 tracking-tight">Wise</span>
        </div>
      </div>

      {/* Modern Search Bar */}
      <div className="relative flex-1 max-w-[180px] sm:max-w-[220px]">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
          <FiSearch className="w-3.5 h-3.5" />
        </span>
        <input 
          type="text" 
          placeholder="Search expenses..." 
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100/60 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-xs text-slate-800 placeholder-slate-400 transition-all font-medium"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;