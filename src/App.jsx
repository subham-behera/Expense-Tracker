import { useState } from "react";
import Tracker from "./pages/Tracker";
import Transaction from "./pages/Transaction";
import EditExpense from "./pages/EditExpense";

function App() {
  const list = [
    { id: 1, category: "Cash", name: "Groceries", amount: "860" },
    { id: 2, category: "Credit Card", name: "Phone Bill", amount: "1200" },
    { id: 3, category: "Cash", name: "Dining Out", amount: "700" }
  ];

  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [items, setItems] = useState(list);
  const [editingExpense, setEditingExpense] = useState(null);

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

  return (
    <>
      <Tracker onNewExpense={handleNewExpense} items={items} onEdit={handleEditExpense} />
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
