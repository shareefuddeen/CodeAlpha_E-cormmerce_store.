const Footer = () => {
    return (
        <footer className="h-[16em] w-full bg-gray-900 text-gray-200 p-2 mb-0">
            <div className="flex justify-center items-center flex-col space-y-4 h-[12em]">
                <h2 className="text-3xl text-center">Join 1,000+ others and <br></br>never miss out on new arrivals</h2>
                <div className="mb-4 bg-white rounded-md p-1">
                    <input type="text" placeholder="Enter your Email" className="mx-2 text-gray-900 outline-none" />
                    <button className="bg-gray-900 p-2 rounded-md font-bold hover:bg-gray-800 transition duration-500">SUBSCRIBE</button>
                </div>
            </div>

            <hr />
            <div className="flex justify-between items-center p-4">
                <div>
                    <h2 className="font-bold text-xl">Vendize</h2>
                </div>
                <div>
                    <ul className="flex space-x-6 justify-between items-center text-lg font-bold">
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Blog</li>
                        <li className="cursor-pointer">News</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;