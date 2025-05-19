import { motion } from "framer-motion";
import { UserBenefits } from "./Roles.jsx";

const UsersRole = () => {
    return (
        <div className="h-auto md:h-screen flex flex-col md:mt-0 mt-[12em] items-center justify-center ">
            <h2 className="text-blue-600 text-4xl px-4 md:px-0 text-center font-mono mb-4">
                Benefits of shopping with vendize
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 p-4 lg:grid-cols-3 xl:grid-cols-4">
                {UserBenefits.map((user, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-2xl hover:bg-gray-200 shadow-lg hover:shadow-xl hover:shadow-md hover:scale-95 transition duration-500"
                    >
                        <div className="text-4xl mb-4">{user.icon}</div>
                        <h3 className="text-xl text-gray-600 font-semibold mb-2">
                            {user.title}
                        </h3>
                        <p className="text-gray-600">{user.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersRole;
