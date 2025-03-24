import { useState } from "react";
import { IoCloseSharp, IoNewspaperSharp } from "react-icons/io5";

function EditExpense({ expense, onUpdateExpense, onClose }) {
  const [name, setName] = useState(expense.name);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSubmit = () => {
    if (!name || !amount) return;
    onUpdateExpense({ ...expense, name, amount: parseFloat(amount), category });
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center font-sans bg-black bg-opacity-50 bg-gradient-to-r from-violet-500 to-purple-500">
      <div className="w-[550px] h-fit shadow rounded-md bg-white flex flex-col">
        <div className="px-6 py-6 flex flex-row justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className="px-2 py-2 bg-purple-300 text-purple-700 text-sm rounded-lg shadow-2xs">
              <IoNewspaperSharp />
            </div>
            <span className="text-[16px] font-semibold">Edit Expense</span>
          </div>
          <button onClick={onClose} className="cursor-pointer">
            <IoCloseSharp />
          </button>
        </div>
        <div className="flex flex-col gap-y-1 px-6 py-4">
          <span>Expense name</span>
          <input
            type="text"
            placeholder="Enter Expense Name"
            className="text-gray-500 px-2 py-1 border border-gray-300 rounded-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row px-6 py-4 items-center">
          <div className="flex flex-col gap-y-1 w-1/2">
            <span>Expense Amount</span>
            <input
              type="number"
              placeholder="Enter Amount"
              className="w-[90%] text-gray-500 px-2 py-1 border border-gray-300 rounded-sm"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <span>Wallet</span>
            <select
              className="w-[90%] text-gray-500 px-2 py-1 border border-gray-300 rounded-sm"
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
        <div className="flex flex-row justify-end gap-x-4 px-6 py-4">
          <button onClick={onClose} 
          className="px-3 py-1.5 border border-gray-300 rounded-sm text-sm cursor-pointer">Cancel</button>
          <button onClick={handleSubmit} 
          className="px-3 py-1.5 border rounded-sm text-white text-sm bg-purple-700 cursor-pointer">Update Expense</button>
        </div>
      </div>
    </div>
  );
}

export default EditExpense;