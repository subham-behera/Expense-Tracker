import { useState } from "react";
import { IoCloseSharp, IoNewspaperSharp } from "react-icons/io5";

function EditExpense({ expense, onUpdateExpense, onClose }) {
  const [name, setName] = useState(expense.name);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [type, setType] = useState(expense.type || "expense"); // "expense" or "income"
  const [date, setDate] = useState(expense.date || (() => new Date().toISOString().split("T")[0]));

  const handleSubmit = () => {
    if (!name || !amount) return;
    onUpdateExpense({ 
      ...expense, 
      name, 
      amount: parseFloat(amount), 
      category,
      type,
      date
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex justify-center items-end sm:items-center z-50 p-0 sm:p-4">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-h-[95vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col border-t border-slate-100 sm:border sm:max-w-md overflow-hidden animate-slide-up sm:animate-fade-in">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex flex-row justify-between items-center bg-white">
          <div className="flex items-center gap-x-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <IoNewspaperSharp className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-slate-800">Edit Transaction</span>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close dialog"
            className="p-1.5 hover:bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl active:scale-95 transition-all cursor-pointer"
          >
            <IoCloseSharp className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 flex flex-col gap-y-4.5 overflow-y-auto">
          {/* Segmented Selector for Income vs Expense */}
          <div className="flex flex-col">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Transaction Type</label>
            <div className="flex flex-row p-1 bg-slate-100/80 rounded-xl">
              <button
                type="button"
                onClick={() => setType("expense")}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  type === "expense" 
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/20" 
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Expense
              </button>
              <button
                type="button"
                onClick={() => setType("income")}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  type === "income" 
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/20" 
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Income
              </button>
            </div>
          </div>

          {/* Expense Name */}
          <div className="flex flex-col">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Description</label>
            <input
              type="text"
              placeholder={type === "expense" ? "e.g. Groceries, Coffee" : "e.g. Salary, Part-time job"}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-sm text-slate-800 placeholder-slate-400 transition-all font-medium"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expense Amount */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Amount (₹)</label>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-sm text-slate-800 placeholder-slate-400 transition-all font-medium font-mono" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />
            </div>

            {/* Wallet Selection */}
            <div className="flex flex-col">
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Wallet / Category</label>
              <select 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-sm text-slate-800 transition-all font-semibold cursor-pointer" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Cash">Cash</option>
                <option value="Bank Account">Bank Account</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Savings">Savings</option>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Date</label>
            <input 
              type="date"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-sm text-slate-800 font-semibold cursor-pointer"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-2 bg-slate-50/50">
          <button 
            onClick={onClose} 
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 font-semibold text-xs hover:bg-slate-50 active:scale-95 transition-all cursor-pointer order-2 sm:order-1"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            disabled={!name || !amount}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 text-white font-semibold text-xs active:scale-95 transition-all cursor-pointer shadow-md shadow-indigo-600/10 order-1 sm:order-2"
          >
            Update Transaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditExpense;