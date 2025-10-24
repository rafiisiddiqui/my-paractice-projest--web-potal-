"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiClock, FiBriefcase, FiLock, FiGrid } from 'react-icons/fi';

const menuItems = [
  { icon: <FiHome size={22} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <FiClock size={22} />, label: 'Analytics', href: '/analytics' },
  // { icon: <FiBriefcase size={22} />, label: 'Projects', href: '/projects' },
  // { icon: <FiLock size={22} />, label: 'Security', href: '/security' },
  // { icon: <FiGrid size={22} />, label: 'Apps', href: '/apps' },
];

const Sidebar = ({ open, setOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className={`h-screen flex flex-col justify-between bg-gradient-to-b from-cyan-700/30 via-cyan-700/50 to-cyan-700/50 backdrop-blur-2xl shadow-2xl transition-all duration-500 ${open ? 'w-72 p-7' : 'w-20 p-3'}  border-cyan-800 relative`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center justify-between mb-5">
          <button
            className="flex items-center gap-1 focus:outline-none"
          >
            <img src="/favicon.ico" alt="logo" className="w-15 h-10 object-contain" />
            {open && (
              <span className=" font-extrabold text-lg bg-gradient-to-rfrom-cyan-600 via-cyan-500 to-cyan-400 bg-clip-text drop-shadow-lg w-full">
                Admin
              </span>
            )}
          </button>
        </div>
        {/* Menu */}
        <div>
          {/* <span className={`uppercase text-xs tracking-widest text-pink-600/80 ${open ? 'block' : 'hidden'} mb-4`}>Main Menu</span> */}
          <ul className="flex flex-col gap-3">
            {menuItems.map((item, idx) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 w-full px-2 py-2 rounded-xl transition-all duration-200
                    ${open ? 'justify-start' : 'justify-center'}
                    ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-cyan-700/20 hover:to-cyan-700/20  text-black shadow-lg' // active effect hamesha
                        : 'text-cyan-1200 hover:bg-gradient-to-r hover: from-cyan-700/20 to-cyan-700/20 hover:text-blue hover:shadow-lg'
                    }`}
                  style={{ overflow: 'hidden', transition: 'width 0.5s' }}
                >
                  {item.icon}
                  <span
                    className={`font-semibold text-base transition-all duration-300 ${open ? 'opacity-100 ml-2' : 'opacity-0 ml-0'}`}
                    style={{ width: open ? 'auto' : 0, display: open ? 'inline' : 'none' }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
