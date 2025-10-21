"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-black-300">
      <Header sidebarOpen={sidebarOpen} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1 flex justify-center items-center" style={{ backgroundColor: "#e4afe2" }}>
          <h1 className="text-3xl font-semibold text-shadow-pink-300">WELCOME TO ANALYTICS!</h1>
        </div>
      </div>
    </div>
  );
}