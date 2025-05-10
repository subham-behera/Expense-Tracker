import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FaMoneyBill } from 'react-icons/fa';
import { GrCreditCard } from 'react-icons/gr';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { PiBankBold } from 'react-icons/pi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClear = () => {
        window.location.reload();
    };

    const handleCategory = (category) => {
        switch (category) {
            case "Cash":
                return <MdAccountBalanceWallet />;
            case "Bank Account":
                return <PiBankBold />;
            case "Credit Card":
                return <GrCreditCard />;
            case "Savings":
                return <FaMoneyBill />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center font-sans justify-between px-4 md:px-6 py-3 md:py-4 gap-y-2">
            {/* Menu Button */}
            <div className="relative w-full sm:w-auto mb-2 sm:mb-0">
                <button
                    className="flex flex-row items-center gap-x-2 text-purple-500 rounded-md px-3 py-1.5 border border-gray-500 cursor-pointer text-sm w-full sm:w-auto justify-center sm:justify-start"
                    onClick={toggleMenu}
                >
                    <FiMenu />
                    <span className="text-gray-500 flex items-center text-[12px] font-medium gap-x-1">
                        All Wallet <MdOutlineArrowDropDown />
                    </span>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute mt-2 bg-white border border-gray-500 rounded-lg shadow-lg w-full sm:w-40 p-2 z-10">
                        <ul>
                            <li className="flex items-center gap-x-2 p-2 hover:bg-purple-100 cursor-pointer">
                                <div className="px-1 py-1 bg-purple-200 text-purple-700 rounded-lg shadow-2xs">
                                    {handleCategory("Cash")}
                                </div>
                                <span className="text-[12px] font-medium text-gray-800">Cash</span>
                            </li>
                            <li className="flex items-center gap-x-2 p-2 hover:bg-purple-100 cursor-pointer">
                                <div className="px-1 py-1 bg-purple-200 text-purple-700 rounded-lg shadow-2xs">
                                    {handleCategory("Bank Account")}
                                </div>
                                <span className="text-[12px] font-medium text-gray-800">Bank Account</span>
                            </li>
                            <li className="flex items-center gap-x-2 p-2 hover:bg-purple-100 cursor-pointer">
                                <div className="px-1 py-1 bg-purple-200 text-purple-700 rounded-lg shadow-2xs">
                                    {handleCategory("Credit Card")}
                                </div>
                                <span className="text-[12px] font-medium text-gray-800">Credit Card</span>
                            </li>
                            <li className="flex items-center gap-x-2 p-2 hover:bg-purple-100 cursor-pointer">
                                <div className="px-1 py-1 bg-purple-200 text-purple-700 rounded-lg shadow-2xs">
                                    {handleCategory("Savings")}
                                </div>
                                <span className="text-[12px] font-medium text-gray-800">Savings</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Clear All Button */}
            <div className="w-full sm:w-auto">
                <button 
                    className="text-gray-500 px-4 py-1.5 border border-gray-500 cursor-pointer rounded-md text-xs font-medium w-full sm:w-auto" 
                    onClick={handleClear}
                >
                    <span>Clear All</span>
                </button>
            </div>
        </div>
    );
}

export default Navbar;