import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../components/Hero";

function Tracker({ onNewExpense, items, onEdit, onDelete }) { 
  return (
    <div className="flex w-screen h-screen justify-center items-center font-sans bg-gradient-to-r from-violet-500 to-purple-500">
      <div className="w-[700px] h-[520px] shadow rounded-lg bg-white flex flex-col">
        <Header onNewExpense={onNewExpense} />
        <Navbar />
        <Stats items={items} />
        <Hero items={items} onEdit={onEdit} onDelete={onDelete} /> 
      </div>
    </div>
  );
}

export default Tracker;