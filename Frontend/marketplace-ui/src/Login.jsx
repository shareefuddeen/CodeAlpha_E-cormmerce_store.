import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import shopLogo from "./assets/shopping-cart-1923313_1920-removebg-preview.png";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const [value, setValue] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.post(
				"http://localhost:8000/token/",
				value,
			);

			const { access, refresh } = response.data;
			localStorage.setItem("access", access);
			localStorage.setItem("refresh", refresh);

			navigate("/products");
			alert("login successful");
		} catch (error) {
			console.log(error);
			alert("invalid credentials");
			navigate("/login");
			setIsLoading(false);
		}
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
					<div className="relative top-[24em] flex items-center justify-center">
						<div className="absolute w-[10em] z-0 h-[10em] rounded-full bg-purple-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
						<div className="absolute z-0 w-[10em] h-[10em] rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
						<div className="absolute z-0 w-[10em] h-[10em] rounded-full bg-pink-300 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					</div>
					<form
						method="POST"
						className="h-screen flex flex-col bg-gray-300 items-center justify-center "
						onSubmit={handleLogin}
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
						<h2 className="text-blue-600 font-bold my-4 text-4xl font-mono">
							Login
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
								type="password"
								name="password"
								value={value.password}
								placeholder="password"
								onChange={handleChange}
								autoComplete="true"
								className="w-full px-4 py-2 rounded-md text-xl border-2 border-blue-600 outline-blue-600 transition duration-500"
							/>

							<button className="text-white text-xl hover:bg-blue-700 hover:scale-95 transition duration-500 bg-blue-600 py-2 rounded-md">
								Login
							</button>
							<p>
								Don't have an account yet?
								<Link
									to="/register"
									className="ml-1 text-blue-600"
								>
									Signup
								</Link>
							</p>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default Login;
