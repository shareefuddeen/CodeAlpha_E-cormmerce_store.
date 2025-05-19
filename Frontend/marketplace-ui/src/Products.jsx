import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./AxiosInstance";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCarts] = useState([]);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("access");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products/");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const HandleCartClicked = async (product) => {
    const payload = {
      product_id: product.id,
      quantity: 1,
    };
    try {
      const response = await axiosInstance.post("add-item/", payload);
      setCarts(response.data);
      alert("added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          See Our Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-contain"
                whileHover={{ scale: 1.05 }}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-center text-blue-600 line-clamp-2">
                  ${product.price}
                </p>
              </div>
              <div className="flex justify-center mb-2">
                <button
                  onClick={() => HandleCartClicked(product)}
                  className="bg-blue-600 rounded-md hover:scale-95 transition duration-500 px-3 py-1 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
