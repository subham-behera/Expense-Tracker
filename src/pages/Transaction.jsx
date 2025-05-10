import { useState } from "react";
import { IoCloseSharp, IoNewspaperSharp } from "react-icons/io5";

function Transaction({ onAddExpense, onClose }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Cash");

  const handleSubmit = () => {
    if (!name || !amount) return;
    onAddExpense({ name, amount: parseFloat(amount), category });
  };

  return (
    <div className="fixed top-0 left-0 w-screen bg-gradient-to-r from-violet-500 to-purple-500 h-screen flex justify-center items-center font-sans bg-black bg-opacity-50 z-50 p-2">
      <div className="w-full max-w-[550px] h-fit shadow rounded-md bg-white flex flex-col">
        <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-row justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className="px-2 py-2 bg-purple-300 text-purple-700 text-sm rounded-lg shadow-2xs">
              <IoNewspaperSharp />
            </div>
            <span className="text-[16px] font-semibold">Add Expense</span>
          </div>
          <button onClick={onClose} className="cursor-pointer">
            <IoCloseSharp />
          </button>
        </div>
        <div className="flex flex-col gap-y-1 px-4 sm:px-6 py-3 sm:py-4">
          <span>Expense name</span>
          <input
            type="text"
            placeholder="Enter Expense Name"
            className="text-gray-500 px-2 py-1 border border-gray-300 rounded-sm w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 items-start sm:items-center gap-y-3 sm:gap-y-0">
          <div className="flex flex-col gap-y-1 w-full sm:w-1/2">
            <span>Expense Amount</span>
            <input 
              type="number" 
              placeholder="Enter Amount"
              className="w-full sm:w-[90%] text-gray-500 px-2 py-1 border border-gray-300 rounded-sm" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full sm:w-1/2">
            <span>Wallet</span>
            <select 
              className="w-full sm:w-[90%] text-gray-500 px-2 py-1 border border-gray-300 rounded-sm" 
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
        <div className="flex flex-col sm:flex-row justify-end gap-y-2 sm:gap-y-0 sm:gap-x-4 px-4 sm:px-6 py-3 sm:py-4">
          <button 
            onClick={onClose} 
            className="px-3 py-1.5 border border-gray-300 rounded-sm text-sm cursor-pointer w-full sm:w-auto order-2 sm:order-1"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            className="px-3 py-1.5 border rounded-sm text-white text-sm bg-purple-700 cursor-pointer w-full sm:w-auto order-1 sm:order-2"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;