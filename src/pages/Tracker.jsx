import { useMemo } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import { FiPlus } from "react-icons/fi";

function Tracker({ 
  onNewExpense, 
  items, 
  allItems, 
  onEdit, 
  onDelete, 
  searchTerm, 
  onSearchChange, 
  onFilterByCategory,
  selectedCategory,
  sortBy,
  onSortChange,
  budget,
  onBudgetChange
}) { 
  // Calculate category breakdowns for expenses
  const categorySummary = useMemo(() => {
    const expenses = allItems.filter(item => item.type === "expense");
    const totalExpense = expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0);
    
    const categories = ["Cash", "Bank Account", "Credit Card", "Savings"];
    return categories.map(cat => {
      const amt = expenses
        .filter(item => item.category === cat)
        .reduce((sum, item) => sum + parseFloat(item.amount), 0);
      const percentage = totalExpense > 0 ? Math.round((amt / totalExpense) * 100) : 0;
      return { category: cat, amount: amt, percentage };
    });
  }, [allItems]);

  return (
    <div className="w-full max-w-md md:max-w-lg min-h-screen md:min-h-[750px] md:h-[820px] md:my-8 bg-white md:rounded-3xl md:shadow-2xl md:border md:border-slate-100 flex flex-col relative overflow-hidden">
      {/* Scrollable content area */}
      <div className="flex-1 flex flex-col overflow-y-auto pb-24">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />
        <Navbar 
          onFilterByCategory={onFilterByCategory} 
          selectedCategory={selectedCategory}
        />
        <Stats items={items} allItems={allItems} budget={budget} />

        {/* Wallet Allocation Visualizer */}
        <div className="px-6 py-1.5 flex flex-col gap-y-2 mb-2 bg-slate-50/20">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Wallet Spend Distribution</span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {categorySummary.map(cat => {
              let color = "bg-slate-400";
              if (cat.category === "Cash") color = "bg-emerald-500";
              else if (cat.category === "Bank Account") color = "bg-blue-500";
              else if (cat.category === "Credit Card") color = "bg-amber-500";
              else if (cat.category === "Savings") color = "bg-indigo-500";
              
              return (
                <div key={cat.category} className="flex flex-col">
                  <div className="flex justify-between items-baseline text-[10px] font-medium text-slate-500">
                    <span className="truncate">{cat.category === "Bank Account" ? "Bank" : cat.category === "Credit Card" ? "Card" : cat.category}</span>
                    <span className="font-mono text-slate-600">{cat.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${cat.percentage}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inline Sort Control & Budget Input */}
        <div className="flex flex-row items-center justify-between px-6 py-2.5 bg-slate-50/70 border-y border-slate-100 text-xs">
          <div className="flex items-center gap-x-1.5 text-slate-500 font-medium">
            <span>Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-indigo-600 font-semibold cursor-pointer focus:outline-none hover:text-indigo-700"
            >
              <option value="date-desc">Newest Date</option>
              <option value="date-asc">Oldest Date</option>
              <option value="amount-desc">Highest Amount</option>
              <option value="amount-asc">Lowest Amount</option>
            </select>
          </div>
          
          <div className="flex items-center gap-x-1.5 text-slate-500 font-medium">
            <span>Budget Limit:</span>
            <span className="text-indigo-600 font-semibold">₹</span>
            <input 
              type="number"
              value={budget === 0 ? "" : budget}
              placeholder="0"
              onChange={(e) => onBudgetChange(parseFloat(e.target.value) || 0)}
              className="w-16 bg-transparent text-indigo-600 font-bold focus:outline-none border-b border-dashed border-indigo-300 focus:border-indigo-500 text-right font-mono"
            />
          </div>
        </div>

        <Hero items={items} onEdit={onEdit} onDelete={onDelete} /> 
      </div>

      {/* Floating Action Button (FAB) for adding new expense */}
      <button 
        onClick={onNewExpense} 
        aria-label="Add Expense"
        className="absolute bottom-6 right-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer z-20"
      >
        <FiPlus className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  );
}

export default Tracker;