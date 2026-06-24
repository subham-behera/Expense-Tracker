function Stats({ items, allItems, budget }) {
  // Sum incomes and expenses based on current filters
  const totalIncome = items
    .filter(item => item.type === "income")
    .reduce((sum, item) => sum + parseFloat(item.amount), 0);
    
  const totalExpense = items
    .filter(item => item.type === "expense")
    .reduce((sum, item) => sum + parseFloat(item.amount), 0);

  const netBalance = totalIncome - totalExpense;
  
  // Calculate budget usage based on total expenses of ALL wallets or filtered?
  // Let's use current filtered expenses to match the metrics shown on screen
  const budgetProgress = budget > 0 ? (totalExpense / budget) * 100 : 0;
  const budgetProgressCapped = Math.min(budgetProgress, 100);

  let budgetBarColor = "bg-emerald-500";
  let budgetTextColor = "text-emerald-600";
  if (budgetProgress >= 100) {
    budgetBarColor = "bg-rose-500 animate-pulse";
    budgetTextColor = "text-rose-600 font-bold";
  } else if (budgetProgress >= 80) {
    budgetBarColor = "bg-amber-500";
    budgetTextColor = "text-amber-600";
  }

  return (
    <div className="mx-6 my-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-xs flex flex-col gap-y-4">
      {/* Balance Widget */}
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Net Balance</span>
          <span className={`text-3xl font-extrabold tracking-tight font-mono ${netBalance >= 0 ? 'text-slate-900' : 'text-rose-600'}`}>
            {netBalance < 0 ? "-" : ""}₹{Math.abs(netBalance).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="text-[10px] bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-lg font-semibold text-slate-500">
          {new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
        </div>
      </div>

      {/* Income vs Expenses Grid */}
      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-3.5">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Income</span>
          <span className="text-base font-bold text-emerald-600 font-mono">
            + ₹{totalIncome.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="flex flex-col border-l border-slate-100 pl-4">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Expenses</span>
          <span className="text-base font-bold text-rose-600 font-mono">
            - ₹{totalExpense.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Budget Progress Indicator */}
      {budget > 0 && (
        <div className="border-t border-slate-100 pt-3.5 flex flex-col gap-y-1.5">
          <div className="flex justify-between items-center text-[10px] text-slate-400">
            <span>Monthly Budget Used</span>
            <span className={`font-semibold font-mono ${budgetTextColor}`}>
              ₹{totalExpense.toLocaleString("en-IN")} / ₹{budget.toLocaleString("en-IN")} ({Math.round(budgetProgress)}%)
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${budgetBarColor} transition-all duration-500`}
              style={{ width: `${budgetProgressCapped}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stats;