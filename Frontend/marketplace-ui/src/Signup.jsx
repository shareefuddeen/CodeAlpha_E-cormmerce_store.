import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import shopLogo from "./assets/shopping-cart-1923313_1920-removebg-preview.png";

const Signup = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [value, setValue] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	const register = async () => {
		const api_url = import.meta.env.VITE_API_URL;

		const headers = {
			"Content-Type": "application/json",
		};

		try {
			const response = await axios
				.post(api_url, value, { headers })
				.then((response) => {
					setIsLoading(false);
					alert("User created succesfully");
					navigate("/login");
				});
		} catch (error) {
			if (error.response) {
				console.log(error.response.data);
				alert("invalid credentials");
				navigate("/register");
			} else {
				console.log(error.message);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		register();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<>
			{isLoading ? (
				<div className="h-screen flex justify-center items-center">
					<p className="text-blue-600 text-6xl font-mono font-bold animate-upDown">
						Vendize
					</p>
				</div>
			) : (
				<div className=" bg-white relative">
					<form
						method="POST"
						className="h-screen flex flex-col bg-gray-300 items-center justify-center "
						onSubmit={handleSubmit}
					>
						<nav className="flex  p-4">
							<Link
								to="/"
								href=""
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
						</nav>
						<div className="relative top-[16em] flex items-center justify-center">
							<div className="absolute z-0 w-72 h-72 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
							<div className="absolute z-0 w-72 h-72 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
							<div className="absolute z-0 w-72 h-72 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
						</div>
						<h2 className="text-blue-600 font-bold my-4 text-4xl font-mono">
							Signup today
						</h2>
						<div className="flex z-10 bg-[white]/10 px-10 py-6 flex-col gap-6 w-[26em]">
							<input
								type="text"
								name="username"
								value={value.username}
								placeholder="username"
								className="w-full px-4 py-2 rounded-md text-xl border-2 border-blue-600 outline-blue-600 transition duration-500"
								onChange={handleChange}
								autoComplete="true"
							/>

							<input
								type="email"
								name="email"
								value={value.email}
								onChange={handleChange}
								autoComplete="true"
								placeholder="email"
								className="w-full px-4 py-2 rounded-md text-xl border-2 border-blue-600 outline-blue-600 transition duration-500"
							/>

							<input
								type="password"
								name="password"
								value={value.password}
								placeholder="password"
								onChange={handleChange}
								autoComplete="true"
								className="w-full px-4 py-2 rounded-md text-xl border-2 border-blue-600 outline-blue-600 transition duration-500"
							/>
							<input
								type="password"
								name="password2"
								value={value.password2}
								placeholder="Confirm password"
								onChange={handleChange}
								autoComplete="true"
								className="w-full px-4 py-2 rounded-md text-xl border-2 border-blue-600 outline-blue-600 transition duration-500"
							/>

							<button className="text-white text-xl hover:bg-blue-700 hover:scale-95 transition duration-500 bg-blue-600 py-2 rounded-md">
								Signup
							</button>
							<p>
								Have an account?
								<Link
									to="/login"
									className="text-blue-600 ml-2"
								>
									Log in
								</Link>
							</p>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default Signup;
