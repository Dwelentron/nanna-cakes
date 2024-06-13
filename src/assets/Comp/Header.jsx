import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa';
import { useCart } from 'react-use-cart';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const {totalUniqueItems}=useCart()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Cart', path: '/cart' }
    ];

    return (
        <header className="bg-red-600 text-white shadow-md w-[100%]">
            <div className="container mx-auto flex justify-between items-center p-4 py-8">
                <div className="one text-2xl font-bold">
                    <NavLink to="/">Nanna's Cakes</NavLink>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={`hover:text-gray-300 ${location.pathname === item.path ? 'underline' : ''}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-red-600">
                    <ul className="flex flex-col space-y-4 p-4">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={`hover:text-gray-300 ${location.pathname === item.path ? 'underline' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
