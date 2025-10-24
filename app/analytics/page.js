"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Analytics Cards Data
  const analyticsCards = [
    { title: "Total Visits", value: "18,450", color: "text-blue-500", bg: "from-blue-100 to-purple-100" },
    { title: "Bounce Rate", value: "32%", color: "text-pink-500", bg: "from-pink-100 to-purple-100" },
    { title: "Conversion Rate", value: "7.8%", color: "text-green-500", bg: "from-green-100 to-purple-100" },
    { title: "Avg. Session", value: "3m 24s", color: "text-purple-500", bg: "from-purple-100 to-blue-100" },
  ];

  // Bar Chart Data (Visits per Month)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Visits",
        data: [1200, 1900, 1700, 2100, 2500, 2300, 2000, 2200, 2400, 2600],
        backgroundColor: "rgba(168, 85, 247, 0.7)",
        borderRadius: 10,
      },
    ],
  };

  // Doughnut Chart Data (Traffic Sources)
  const doughnutData = {
    labels: ["Organic", "Direct", "Referral", "Social"],
    datasets: [
      {
        data: [45, 25, 18, 12],
        backgroundColor: [
          "rgba(168, 85, 247, 0.8)", // purple
          "rgba(236, 72, 153, 0.8)", // pink
          "rgba(34,197,94,0.8)",     // green
          "rgba(59,130,246,0.8)",    // blue
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-black-300">
      <Header sidebarOpen={sidebarOpen} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1 p-4">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {analyticsCards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${card.bg} p-4 rounded-xl shadow-lg border border-white/30 flex flex-col items-center`}
              >
                <span className="text-gray-700 font-semibold mb-1">{card.title}</span>
                <span className={`text-3xl font-bold ${card.color}`}>{card.value}</span>
              </div>
            ))}
          </div>
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bar Chart */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-6 rounded-xl shadow-lg border border-white/30 w-full min-w-[320px] h-[350px] flex flex-col">
              <h2 className="text-lg font-bold mb-4 text-pink-600">Visits Trend</h2>
              <div className="flex-1 flex items-center">
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { ticks: { color: "#a855f7", font: { size: 14 } } },
                      y: { ticks: { color: "#ec4899", font: { size: 14 } } }
                    }
                  }}
                  height={220}
                />
              </div>
            </div>
            {/* Doughnut Chart - Analytics Theme & Alignment */}
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg border border-white/30 w-full flex flex-col items-center min-h-[420px]">
              <h2 className="text-2xl font-extrabold mb-6 text-purple-600 drop-shadow text-center tracking-wide">
                Traffic Sources
              </h2>
              <div className="flex flex-col items-center w-full">
                <div className="w-[320px] md:w-[380px] mx-auto mb-4">
                  <Doughnut
                    data={doughnutData}
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
                  {doughnutData.labels.map((label, idx) => (
                    <div key={label} className="flex items-center gap-2">
                      <span
                        className="inline-block w-5 h-3 rounded"
                        style={{ background: doughnutData.datasets[0].backgroundColor[idx] }}
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