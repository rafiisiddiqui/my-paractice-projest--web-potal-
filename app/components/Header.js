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
    <header className="w-full bg-gradient-to-r from-cyan-700/30 via-cyan-800/50 to-cyan-800/50 py-2 px-0">
      <div className="flex flex-row items-center justify-between py-4 px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-rfrom-cyan-600 via-cyan-500 to-cyan-400 bg-clip-text drop-shadow-lg tracking-wide transition-all duration-500 text-left">
          Admin Dashboard
        </h1>
        <nav className="flex items-center gap-10">
          <Link href="/dashboard" className="text-shadow-cyan-700 hover:text-blue-500 font-bold text-2xl md:text-3xl transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-shadow-cyan-200 hover:text-blue-500 font-bold text-2xl md:text-3xl transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="text-shadow-cyan-700 hover:text-blue-500 font-bold text-2xl md:text-3xl transition-colors duration-200">
            Contact
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-400/50 to-cyan-400/50 hover:from-cyan-500/50 hover:to-cyan-300/20 hover:bg-gradient-to-r text-cyan hover:text-blue font-bold text-2xl md:text-3xl px-6 py-3 rounded-xl ml-2 transition-all duration-200 text-shadow-lg "
          >
            Log Out <FiLogOut size={22} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
