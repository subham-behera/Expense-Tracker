import { useState, useMemo } from "react";
import Tracker from "./pages/Tracker";
import Transaction from "./pages/Transaction";
import EditExpense from "./pages/EditExpense";

function App() {
  const list = [
    { id: 1, category: "Cash", name: "Groceries", amount: "860" },
    { id: 2, category: "Credit Card", name: "Phone Bill", amount: "600" },
    { id: 3, category: "Cash", name: "Dining Out", amount: "700" }
  ];

  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [items, setItems] = useState(list);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toString().includes(searchTerm)
    );
  }, [items, searchTerm]);

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

  return (
    <>
      <Tracker 
        onNewExpense={handleNewExpense} 
        items={filteredItems}
        allItems={items}
        onEdit={handleEditExpense} 
        onDelete={handleDeleteExpense}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {isTransactionOpen && <Transaction onAddExpense={handleAddExpense} onClose={() => setIsTransactionOpen(false)} />}
      {isEditOpen && editingExpense && (
        <EditExpense
          expense={editingExpense}
          onUpdateExpense={handleUpdateExpense}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </>
  );
}

export default App;