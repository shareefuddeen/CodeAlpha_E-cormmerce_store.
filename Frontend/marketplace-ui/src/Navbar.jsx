import shopLogo from "./assets/shopping-cart-1923313_1920-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "./assets/menu.png";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        console.log("logged out successfully");
        navigate("/login");
    };

    const isAuthenticated = !!localStorage.getItem("access");

    return (
        <div className="relative">
            <button
                className="absolute right-4 top-[40%] block md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <span className="absolute z-50 down-0 right-0 text-3xl text-white">
                        X
                    </span>
                ) : (
                    <img src={menu} width="22" height="22" />
                )}
            </button>
            <nav className="flex shadow-md justify-around p-4">
                <Link to="/" className="flex items-center justify-center p-0">
                    <img
                        src={shopLogo}
                        width="92px"
                        height="42px"
                        alt="logo"
                        className=""
                    />
                    <p className="relative text-blue-600 right-6 font-bold text-2xl">
                        Vendize
                    </p>
                </Link>

                <ul className="text-gray-900 hidden md:flex items-center justify-center gap-x-4">
                    <li className="mx-4 text-lg">
                        <Link
                            className="hover:bg-blue-600 hover:text-white transition duration-500 px-4 py-1 rounded-lg"
                            to="/products"
                        >
                            Products
                        </Link>
                    </li>
                    <li className="mx-4 text-lg">
                        <Link
                            className="hover:bg-blue-600 hover:text-white transition duration-500 px-2 py-1 rounded-lg"
                            to="/cart"
                        >
                            Cart
                        </Link>
                    </li>

                    {isAuthenticated ? (
                        <li className="mx-4 text-lg">
                            <button
                                onClick={() => logout()}
                                className="hover:bg-blue-600 hover:text-white transition duration-500 px-2 py-1 rounded-lg"
                            >
                                Log out
                            </button>
                        </li>
                    ) : (
                        <li className="mx-4 text-lg">
                            <Link
                                className="hover:bg-blue-600 hover:text-white transition duration-500 px-2 py-1 rounded-lg"
                                to="/register"
                            >
                                Sign up
                            </Link>
                        </li>
                    )}
                </ul>
                {isOpen && (
                    <div className="lg:hidden w-full overflow-hidden absolute top-0 right-0 bg-blue-600 mx-0 ">
                        <nav className="transition duration-500">
                            <li className="list-none">
                                <Link
                                    to="/products"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                    className="text-white block text-2xl hover:no-underline hover:bg-blue-800 px-6 mx-0 transition duration-500 cursor-pointer text-center z-40"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link
                                    to="/cart"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                    className="text-white block text-2xl w-full hover:no-underline hover:bg-blue-800 px-6 transition duration-500 cursor-pointer text-center z-40"
                                >
                                    Cart
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link
                                    to="/register"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                    className="text-white text-2xl block hover:no-underline hover:bg-blue-800 px-6 transition duration-500 cursor-pointer text-center z-40"
                                >
                                    Sign up
                                </Link>
                            </li>
                        </nav>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
