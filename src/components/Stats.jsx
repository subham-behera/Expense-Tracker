function Stats({ items }) {
  const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.amount), 0);

  return (
    <div className="flex flex-col sm:flex-row items-center font-sans justify-between px-4 md:px-6 py-3 md:py-4 gap-y-2">
      <div className="text-[13px] font-bold text-gray-600 mb-2 sm:mb-0">
        {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-6">
        <div className="text-[13px] font-semibold text-gray-600">Total Transactions: {items.length}</div>
        <div className="text-[13px] font-semibold text-gray-600">Total Amount: ₹{totalAmount}</div>
      </div>
    </div>
  );
}

export default Stats;