import ItemList from "./ItemList";
import { FiInbox } from "react-icons/fi";

function Hero({ items, onEdit, onDelete }) { 
  return (
    <div className="flex-1 flex flex-col w-full px-6 py-2">
      <div className="flex flex-col gap-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemList
              key={item.id}
              {...item}
              onEdit={onEdit}
              onDelete={onDelete} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-slate-400 gap-y-3">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-full text-slate-300">
              <FiInbox className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600">No expenses found</p>
              <p className="text-xs text-slate-400 mt-0.5">Try searching for something else or add a new record.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;