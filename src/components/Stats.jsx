import { useEffect, useState } from "react";

function Stats() {
    const [date, setDate] = useState();
    const [len, setLen] = useState(0);
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Fetch the data from JSON file
    useEffect(() => {
        fetch("src/assets/data/myWallet.json")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLen(data.length);
                
                // Calculate the total amount
                const total = data.reduce((sum, item) => sum + parseFloat(item.amount), 0);
                setTotalAmount(total);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Set the current date
    useEffect(() => {
        const today = new Date();
        const dateOfMonth = today.getDate();
        const month = today.toLocaleString("en-IN", { month: "long" });
        const year = today.getFullYear();

        const formattedDate = `${month} ${dateOfMonth} , ${year}`;
        setDate(formattedDate);
    }, []); 

    return (
        <div className="flex flex-row items-center font-sans justify-between px-6 py-4">
            {/* Date */}
            <div className="text-[13px] font-bold text-gray-600">
                {date}
            </div>
            <div className="flex flex-row items-center gap-x-6">
                {/* Total Transaction */}
                <div className="text-[13px] font-semibold text-gray-600">
                    <span>Total Transactions: {len}</span>
                </div>
                {/* Total Amount */}
                <div className="text-[13px] font-semibold text-gray-600">
                    <span>Total Amount: ₹{totalAmount}</span>
                </div>
            </div>
        </div>
    );
}

export default Stats;
