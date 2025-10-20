"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi"; // Log Out icon

const Header = ({ sidebarOpen }) => {
    const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem("token"); // Apne hisaab se token ya session clear karein
    router.push("/");
  };

  return (
    <header className="w-full bg-gradient-to-r from-pink-200/70 via-purple-200/60 to-blue-100/60 shadow-2xl py-6 px-0 ">
      <div className="container mx-auto flex flex-row items-center justify-between gap-4">
        <h1 className={`text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text drop-shadow-lg tracking-wide transition-all duration-500 ${sidebarOpen ? 'ml-24 md:ml-60' : ''}`}>
          Aesthetic!
        </h1>
        <nav className="flex justify-end items-center w-full">
          <div className="flex space-x-8 bg-white/30 backdrop-blur-md rounded-x px-6 py-2 shadow-md">
            <Link href="/dashboard" className="text-shadow-pink-700 hover:text-purple-500 font-semibold text-lg transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-shadow-pink-700 hover:text-purple-500 font-semibold text-lg transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-shadow-pink-700 hover:text-purple-600 font-semibold text-lg transition-colors duration-200">
              Contact
            </Link>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-200 to-pink-200 hover:from-pink-400 hover:to-purple-500 text-black hover:text-purple-50 font-bold px-5 py-2 rounded-xl  ml-6 transition-all duration-200 text-shadow-lg border border-red-400">
            Log Out <FiLogOut size={22} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
