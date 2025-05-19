import shopLogo from "./assets/shopping-cart-1923313_1920-removebg-preview.png";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { Link, useNavigate } from "react-router-dom";
import menu from "./assets/menu.png";
import { useState } from "react";

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
        <>
            <div className="relative ">
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
                    <Link
                        to="/"
                        className="flex items-center justify-center p-0"
                    >
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
            <div class="m-0 flex flex-col justify-center items-center h-screen w-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-40 space-y-6">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <p className="font-bold z-100 text-3xl md:text-5xl text-blue-600 text-center tracking-normal md:tracking-wide md:leading-normal leading-[48px]">
                        Welcome to
                        <span className="mx-1 text-gray-900 font-extrabold">
                            Vendize,
                        </span>
                        The
                        <span className="mx-1 text-gray-900 font-extrabold">
                            Marketplace
                        </span>
                        <br></br>That Works for
                        <span className="text-gray-900 font-extrabold">
                            Everyone
                        </span>
                    </p>
                </motion.div>
                <div className="w-full flex justify-center items-center">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="text-black font-bold outline-none w-1/2 bg-gray-200 rounded-s-xl px-6 py-2"
                    />
                    <input
                        type="button"
                        value="Search"
                        className="text-white mr-2 rounded-e-xl px-6 cursor-pointer py-2 bg-blue-600"
                    />
                </div>
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="relative"
                >
                    <div className="absolute -inset-0.5 opacity-75 bg-blue-400 rounded-lg blur"></div>
                    <button className="relative bg-blue-600 hover:scale-95 transition duration-500 text-white px-7 py-4 flex items-center hove rounded-lg divide-x divide-gray-500">
                        <span className="text-gray-200 pr-6">
                            explore products
                        </span>
                        <span className="text-indigo-300 pl-6">
                            join now &rarr;
                        </span>
                    </button>
                </motion.div>
            </div>
        </>
    );
};

export default Navbar;
