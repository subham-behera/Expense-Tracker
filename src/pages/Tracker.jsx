import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../components/Hero";

function Tracker({ onNewExpense, items, allItems, onEdit, onDelete, searchTerm, onSearchChange, onFilterByCategory }) { 
  return (
    <div className="flex w-screen min-h-screen justify-center items-center font-sans bg-gradient-to-r from-violet-500 to-purple-500 p-2 md:p-4">
      <div className="w-full max-w-[700px] h-auto min-h-[520px] shadow rounded-lg bg-white flex flex-col">
        <Header 
          onNewExpense={onNewExpense} 
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />
        <Navbar onFilterByCategory={onFilterByCategory} />
        <Stats items={items} />
        <Hero items={items} onEdit={onEdit} onDelete={onDelete} /> 
      </div>
    </div>
  );
}

export default Tracker;