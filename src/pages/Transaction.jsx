import { useEffect, useState } from "react";
import { IoCloseSharp, IoNewspaperSharp } from "react-icons/io5";

function Transaction({allItems,operation="Add"}) {

    const [items,setItems]=useState(allItems)
    const [category,setCategory]=useState("Cash")
    const [name,setName]=useState("")
    const [amount,setAmount]=useState();
    

    return (
        <div className="flex w-screen h-screen justify-center items-center font-sans bg-gradient-to-r from-violet-500 to-purple-500">
            <div className="w-[550px] h-fit shadow rounded-md bg-white flex flex-col">
                <div className="px-6 py-6 flex flex-row justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <div className="px-2 py-2 bg-purple-300 text-purple-700 text-sm rounded-lg shadow-2xs">
                            <IoNewspaperSharp/>
                        </div>
                        <span className="text-[16px] font-semibold">{operation} Expense</span>
                    </div>
                    <button className="cursor-pointer">
                        <IoCloseSharp/>
                    </button>
                </div>
                <div className="flex flex-col gap-y-1 px-6 py-4">
                    <span>Expense name</span>
                    <input type="text"
                        placeholder="Enter Expense Name"
                        className="text-gray-500"
                    ></input>
                </div>
                <div className="flex flex-row px-6 py-4 items-center">
                    <div className="flex flex-col gap-y-1 w-1/2">
                        <span>Expense Amount</span>
                        <input type="text"
                            className="w-[80%]"
                        ></input>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <span>Wallet</span>
                        <input type="text"></input>
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-x-4 px-6 py-4">
                    <button className="">Cancel</button>
                    <button className="">{operation} Expense</button>
                </div>
            </div>
        </div>
    );
}

export default Transaction;