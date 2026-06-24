import { useState, useMemo } from "react";
import Tracker from "./pages/Tracker";
import Transaction from "./pages/Transaction";
import EditExpense from "./pages/EditExpense";

function App() {
  const list = [
    { id: 1, category: "Cash", name: "Salary Credit", amount: "25000", type: "income", date: "2026-06-01" },
    { id: 2, category: "Cash", name: "Groceries", amount: "860", type: "expense", date: "2026-06-15" },
    { id: 3, category: "Credit Card", name: "Phone Bill", amount: "600", type: "expense", date: "2026-06-20" },
    { id: 4, category: "Bank Account", name: "Rent Payment", amount: "5000", type: "expense", date: "2026-06-05" },
    { id: 5, category: "Savings", name: "Stock Dividend", amount: "1200", type: "income", date: "2026-06-18" },
    { id: 6, category: "Cash", name: "Dining Out", amount: "700", type: "expense", date: "2026-06-24" }
  ];

  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [items, setItems] = useState(list);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("date-desc");
  const [budget, setBudget] = useState(15000);

  // Filter & sort items based on search term, category, and sorting selection
  const sortedAndFilteredItems = useMemo(() => {
    let filtered = items;
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.amount.toString().includes(searchTerm)
      );
    }
    
    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "date-desc") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "date-asc") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "amount-desc") {
        return parseFloat(b.amount) - parseFloat(a.amount);
      } else if (sortBy === "amount-asc") {
        return parseFloat(a.amount) - parseFloat(b.amount);
      }
      return 0;
    });
    
    return sorted;
  }, [items, searchTerm, selectedCategory, sortBy]);

  const handleNewExpense = () => {
    setIsTransactionOpen(true);
  };

  const handleAddExpense = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
    setIsTransactionOpen(false);
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setIsEditOpen(true);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setItems(items.map(item => (item.id === updatedExpense.id ? updatedExpense : item)));
    setIsEditOpen(false);
    setEditingExpense(null);
  };

  const handleDeleteExpense = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans flex flex-col justify-start items-center">
      <Tracker 
        onNewExpense={handleNewExpense} 
        items={sortedAndFilteredItems}
        allItems={items}
        onEdit={handleEditExpense} 
        onDelete={handleDeleteExpense}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onFilterByCategory={handleFilterByCategory}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        budget={budget}
        onBudgetChange={setBudget}
      />
      {isTransactionOpen && <Transaction onAddExpense={handleAddExpense} onClose={() => setIsTransactionOpen(false)} />}
      {isEditOpen && editingExpense && (
        <EditExpense
          expense={editingExpense}
          onUpdateExpense={handleUpdateExpense}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </div>
  );
}

export default App;