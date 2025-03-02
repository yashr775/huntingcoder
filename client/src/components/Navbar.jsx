import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-black w-full h-14 flex justify-center items-center">
            <ul className="flex text-xl space-x-10 text-white font-bold">
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">
                    <Link href="/about">About</Link>
                </li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">
                    <Link href="/blog">Blog</Link>
                </li>
                <li className="py-2 px-4 hover:text-gray-400 cursor-pointer">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

