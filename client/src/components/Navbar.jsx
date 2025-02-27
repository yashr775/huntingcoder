const Navbar = () => {
    return (
        <div className="bg-black w-full h-14 flex justify-center items-center">
            <ul className="flex text-xl space-x-10 text-white font-bold">
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">Home</li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">About</li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">Blog</li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
