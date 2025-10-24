"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);


export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    


// Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 11000, 17000, 14000, 13000, 12500, 14500, 16000], // 11 values
        backgroundColor: "rgba(236, 72, 153, 0.7)", // pink-400
        borderRadius: 10,
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [
          "rgba(168, 85, 247, 0.8)", // purple-500
          "rgba(236, 72, 153, 0.8)", // pink-400
          "rgba(96, 165, 250, 0.8)", // blue-400
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const progressCards = [
    { title: "Profit", value: 82, color: "#3b82f6" },         // blue-500
    { title: "No. of Visits", value: 46, color: "#ef4444" },  // red-500
    { title: "Customers", value: 84, color: "#10b981" },      // green-500
    { title: "Sales", value: 55, color: "#f59e42" },          // orange-400
  ];

return (
    <div className="min-h-screen flex flex-col bg-black-300 w-auto">
      <Header sidebarOpen={sidebarOpen} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1 p-4">
        
         {/* Cards - Analytics style gradients and bold values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  {[
    {
      title: "Total Users",
      value: "1,245",
      valueClass: "text-blue-500",
      bg: "from-blue-100 to-purple-100",
    },
    {
      title: "Projects",
      value: "12",
      valueClass: "text-pink-500",
      bg: "from-pink-100 to-purple-100",
    },
    {
      title: "Revenue",
      value: "$14,560",
      valueClass: "text-green-500",
      bg: "from-green-100 to-purple-100",
    },
    {
      title: "Active Sessions",
      value: "45",
      valueClass: "text-purple-500",
      bg: "from-purple-100 to-blue-100",
    },
  ].map((card, index) => (
    <div
      key={index}
      className={`bg-gradient-to-br ${card.bg} p-6 rounded-xl shadow-lg border border-white/30 flex flex-col items-center`}
    >
      <h3 className="text-gray-700 font-semibold mb-1">{card.title}</h3>
      <p className={`text-3xl font-bold ${card.valueClass}`}>{card.value}</p>
    </div>
  ))}
</div>

         {/* Progress Cards - Minimal Modern Style */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {progressCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-100 to-purple-200 p-4 rounded-xl shadow-lg
                  hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer 
                  backdrop-blur-lg border border-white/30 w-full h-[220px] flex flex-col items-center justify-center"
              >
                <span className="text-gray-700 font-semibold mb-2">{card.title}</span>
                <div className="w-20 h-20 mb-2">
                  <CircularProgressbar
                    value={card.value}
                    text={`${card.value}%`}
                    styles={buildStyles({
                      pathColor: card.color,
                      textColor: card.color,
                      trailColor: "#fff",
                      textSize: "22px",
                      strokeLinecap: "round",
                    })}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bar Chart */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-6 rounded-xl shadow-lg border border-white/30 w-full min-w-[320px] h-[350px] flex flex-col">
              <h2 className="text-lg font-bold mb-4 text-pink-600">Revenue Overview</h2>
              <div className="flex-1 flex items-center">
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: {
                        ticks: { color: "#a855f7", font: { size: 14 } }
                      },
                      y: {
                        ticks: { color: "#ec4899", font: { size: 14 } }
                      }
                    }
                  }}
                  height={220}
                />
              </div>
            </div>
            {/* Pie Chart - Analytics Theme & Alignment */}
<div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg border border-white/30 w-full flex flex-col items-center min-h-[420px]">
  <h2 className="text-2xl font-extrabold mb-6 text-purple-600 drop-shadow text-center tracking-wide">
    User Status
  </h2>
  <div className="flex flex-col items-center w-full">
    <div className="w-[320px] md:w-[380px] mx-auto mb-4">
      <Pie
        data={pieData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          cutout: "70%"
        }}
      />
    </div>
    {/* Custom Legend */}
    <div className="flex flex-wrap justify-center gap-6 mt-2 w-full">
      {pieData.labels.map((label, idx) => (
        <div key={label} className="flex items-center gap-2">
          <span
            className="inline-block w-5 h-3 rounded"
            style={{ background: pieData.datasets[0].backgroundColor[idx] }}
          ></span>
          <span className="text-base font-semibold text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  </div>
</div>
          </div>
         
        </div>
      </div>
    </div>
    );
  }
