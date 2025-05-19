import { useState, useEffect } from "react";
import axiosInstance from "./AxiosInstance";
import Navbar from "./Navbar.jsx";

const Order = () => {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await axiosInstance.get("get-order/");
				setOrders(response.data);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOrders();
	}, []);

	return (
		<>
			<Navbar />
			<div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					My Orders
				</h2>

				{orders.length === 0 ? (
					<p className="text-gray-500 text-center">
						No orders found.
					</p>
				) : (
					<ul className="space-y-4">
						{orders.map((order, index) => (
							<li
								key={index}
								className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
							>
								<p className="text-lg font-medium text-gray-800">
									Product:{" "}
									<span className="font-semibold">
										{order.product}
									</span>
								</p>
								<p className="text-gray-600">
									Quantity: {order.quantity}
								</p>
								<p className="text-gray-600">
									Price: ${order.price}
								</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default Order;
