import pay from "./assets/Credit card-bro.png";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants.js";
import { Link } from "react-router-dom";

const Pay = () => {
	return (
		<>
			<div className="md:h-screen h-auto flex md:flex-row flex-col p-6 md:p-0 md:mt-0 mt-[10em] relative items-center bg-gray-200 justify-center">
				<div>
					<div className="flex justify-center items-center">
						<img className="w-[26em] " src={pay} />
					</div>
					<motion.h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="md:text-6xl text-4xl text-center text-blue-600 font-bold font-serif "
					>
						Secure payments
					</motion.h2>
					<motion.p
						variants={fadeIn("right", 0.4)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl font-sans text-gray-900 mx-0 md:mx-24 tracking-wide leading-normal"
					>
						Every transaction on our platform is protected with the
						latest encryption technologies and PCI-DSS compliance
						standards. Shop with peace of mind, knowing your data is
						always protected.
					</motion.p>
					<Link
						to="Products"
						className="text-blue-600 hover:text-blue-600 flex justify-center items-center  mt-6"
					>
						Shop Securely Now &rarr;
					</Link>
				</div>
			</div>
		</>
	);
};

export default Pay;
