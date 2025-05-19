import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import image from "./assets/Online shopping-amico.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            {/*Why Choose Us*/}

            <section className="flex relative flex-col md:mt-0 mt-[10em] h-auto md:h-screen justify-center items-center bg-gray-200 text-gray-900 px-3 md:px-52 w-full">
                <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-4xl w-full m-4 text-blue-600 text-center font-bold font-serif"
                >
                    Why Choose Us?
                </motion.h1>
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <p className="md:text-4xl my-6 md:my-0 text-2xl leading-normal tracking-wide font-sans">
                        Vendize is a revolutionary e-commerce platform that
                        connects buyers and sellers in one seamless marketplace.
                        Whether you're a business owner looking to expand your
                        reach or a shopper searching for quality products, we
                        offer a dynamic, secure, and user-friendly experience.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                ></motion.div>
            </section>

            {/*join Today*/}

            <section className="h-auto md:h-screen">
                <div className="flex md:flex-row flex-col justify-center items-center mt-[10em] md:mt-0 p-2 md:p-16">
                    <div>
                        <motion.h1
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-4xl text-blue-600 md:text-left text-center font-bold font-serif m-2"
                        >
                            Join Us Today!
                        </motion.h1>

                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <p className="text-2xl m-2 font-sans text-gray-900 tracking-wide leading-normal">
                                Whether you're a seller looking to grow your
                                business or a buyer searching for amazing
                                products, Vendize is your go-to destination.
                                Sign up now and be part of the future of online
                                shopping!
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <img
                            src={image}
                            alt="online shopping"
                            className="md:h-auto h-[26em]"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
                <div className="flex justify-center items-center md:-mt-24">
                    <Link
                        to="/register"
                        className="text-white text-xl md:m-2 bg-blue-600 rounded-lg px-6 py-4 hover:scale-95 transition duration-500"
                    >
                        Sign up
                    </Link>
                </div>
            </section>
        </>
    );
};
export default Hero;
