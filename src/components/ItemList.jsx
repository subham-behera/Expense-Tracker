import { FaMoneyBill } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { MdAccountBalanceWallet, MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { PiBankBold } from "react-icons/pi";

function ItemList({ category, name, amount, id, type = "expense", date, onEdit, onDelete }) {
  const getCategoryStyles = (category) => {
    switch (category) {
      case "Cash":
        return {
          icon: <MdAccountBalanceWallet className="w-4 h-4" />,
          classes: "bg-emerald-50 text-emerald-600 border border-emerald-100/40"
        };
      case "Bank Account":
        return {
          icon: <PiBankBold className="w-4 h-4" />,
          classes: "bg-blue-50 text-blue-600 border border-blue-100/40"
        };
      case "Credit Card":
        return {
          icon: <GrCreditCard className="w-4 h-4" />,
          classes: "bg-amber-50 text-amber-600 border border-amber-100/40"
        };
      case "Savings":
        return {
          icon: <FaMoneyBill className="w-4 h-4" />,
          classes: "bg-indigo-50 text-indigo-600 border border-indigo-100/40"
        };
      default:
        return {
          icon: <MdAccountBalanceWallet className="w-4 h-4" />,
          classes: "bg-slate-50 text-slate-600 border border-slate-200/40"
        };
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
    } catch (e) {
      return dateStr;
    }
  };

  const { icon, classes } = getCategoryStyles(category);
  const isIncome = type === "income";

  return (
    <div className="flex flex-row items-center justify-between p-4 bg-white border border-slate-100/80 rounded-2xl shadow-xs hover:shadow-sm hover:border-slate-200/40 transition-all duration-200">
      {/* Left section: Category icon and Name info */}
      <div className="flex flex-row items-center gap-x-3">
        <div className={`p-2.5 rounded-xl ${classes}`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold text-slate-800 tracking-tight leading-none mb-1">{name}</span>
          <div className="flex items-center gap-x-1.5 text-[10px] font-medium text-slate-400 leading-none">
            <span>{category}</span>
            <span>•</span>
            <span className="font-mono">{formatDate(date)}</span>
          </div>
        </div>
      </div>

      {/* Right section: Amount and edit/delete actions */}
      <div className="flex flex-row items-center gap-x-4">
        <span className={`text-sm font-bold font-mono tracking-tight ${isIncome ? 'text-emerald-600' : 'text-slate-900'}`}>
          {isIncome ? "+" : "-"} ₹{parseFloat(amount).toLocaleString("en-IN")}
        </span>
        <div className="flex flex-row gap-x-1">
          <button 
            onClick={() => onEdit({ id, name, amount, category, type, date })} 
            aria-label="Edit expense"
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all active:scale-90 cursor-pointer"
          >
            <MdOutlineEdit className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onDelete(id)} 
            aria-label="Delete expense"
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-90 cursor-pointer"
          >
            <MdDeleteOutline className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;