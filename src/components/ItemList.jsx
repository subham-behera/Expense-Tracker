import { FaMoneyBill } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { MdAccountBalanceWallet, MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { PiBankBold } from "react-icons/pi";

function ItemList({category,name,amount}) {

    const handleCategory=(category)=>{
        switch(category){
            case "Cash":
                return <MdAccountBalanceWallet/>
            case "Bank Account":
                return <PiBankBold/>
            case "Credit Card":
                return <GrCreditCard/>
            case "Savings":
                return <FaMoneyBill/>
            default:
                return null;
        }
    }

    return (
        <div className="flex flex-row items-center font-sans w-full shadow-lg rounded-lg shadow-md justify-between px-6 py-4">
            <div className="flex flex-row gap-x-2 items-center">
                <div className="px-2 py-2 bg-purple-200 text-purple-700 rounded-lg shadow-2xs">
                    {handleCategory(category)}
                </div>
                <div className="flex justify-between flex-col">
                    <span className="text-[13px] font-bold text-black">{name}</span>
                    <span className="text-[11px] text-gray-500">{category}</span>
                </div>
            </div>
            <div className="flex flex-row font-bold items-center gap-x-10">
                <div>₹ {amount}</div>
                <div className="flex items-center gap-x-2 flex-row">
                    <button className="px-2 py-2 bg-purple-200 text-purple-700 text-sm rounded-lg shadow-2xs cursor-pointer">
                        <MdOutlineEdit/>
                    </button>
                    <button className="px-2 py-2 bg-violet-200 text-violet-700 text-sm rounded-lg shadow-2xs cursor-pointer">
                        <MdDeleteOutline/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemList;