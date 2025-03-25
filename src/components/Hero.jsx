import ItemList from "./ItemList";

function Hero({ items, onEdit, onDelete }) { 
  return (
    <div className="flex flex-row w-full h-[325px] font-sans px-6 py-4">
      <div className="flex flex-col w-full h-full overflow-y-auto gap-y-4 px-2 py-2">
        {items.map((item) => (
          <ItemList
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            amount={item.amount}
            onEdit={onEdit}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;