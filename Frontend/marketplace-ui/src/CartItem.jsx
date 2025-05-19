import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "./AxiosInstance";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";

const CartItem = () => {
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const response = await axiosInstance.get("get-cart");
				setItems(response.data.items);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCart();
	}, []);

	const DeleteCartItem = async (itemId) => {
		try {
			const confirmed = window.confirm(
				"Are you sure you want to delete this item?",
			);
			if (!confirmed) return;

			const response = await axiosInstance.delete(
				`delete-item/${itemId}/`,
			);
			console.log("Item deleted successfully", response);
		} catch (error) {
			console.error("Error deleting item:", error);
		}
	};

	const handleDeleteItem = async (itemId) => {
		await DeleteCartItem(itemId);

		setItems((prev) => prev.filter((item) => item.id != itemId));
	};

	const orderItem = async () => {
		try {
			const response = await axiosInstance.post("create-order/", {});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleOrderClicked = async () => {
		await orderItem();
		alert("order placed successfully");
		navigate("/get-order");
		setItems([]);
	};

	return (
		<div>
			<Navbar />
			<h2 className="text-3xl font-bold pt-6 text-center mb-12">Cart</h2>

			<div className="grid grid-cols-1 px-6 sm:grid-cols-2 md:grid-cols-3 gap-10">
				{items.map((item) => (
					<motion.div
						key={item.product.id}
						className="bg-white rounded-xl shadow-md overflow-hidden"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.img
							src={item.product.image}
							alt={item.product.name}
							className="w-full h-52 object-contain"
							whileHover={{ scale: 1.05 }}
						/>

						<div className="p-4">
							<h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
								{item.product.description}
							</h3>
							<p className="text-sm text-blue-600 text-center ">
								${item.product.price}
							</p>
						</div>
						<div className="flex justify-center mb-2">
							<button
								onClick={() => handleDeleteItem(item.id)}
								className="bg-red-600 rounded-md hover:scale-95 transition duration-400 px-3 py-1 text-white"
							>
								Remove Item
							</button>
						</div>
					</motion.div>
				))}
			</div>
			<div className="flex justify-center items-center">
				<button
					onClick={handleOrderClicked}
					className="bg-blue-600 text-3xl rounded-md hover:scale-95 transition duration-400 px-3 py-1 my-6 text-white"
				>
					Order Item(s)
				</button>
			</div>
		</div>
	);
};

export default CartItem;
