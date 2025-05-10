import ItemList from "./ItemList";

function Hero({ items, onEdit, onDelete }) { 
  return (
    <div className="flex flex-row w-full h-full min-h-[200px] sm:min-h-[325px] font-sans px-3 sm:px-6 py-2 sm:py-4">
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-2 sm:gap-y-4 px-1 sm:px-2 py-1 sm:py-2">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemList
              key={item.id}
              id={item.id}
              category={item.category}
              name={item.name}
              amount={item.amount}
              onEdit={onEdit}
              onDelete={onDelete} 
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No expenses found
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;