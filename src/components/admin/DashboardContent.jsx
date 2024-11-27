// src/components/DashboardContent.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrasi komponen ChartJS yang diperlukan
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent = () => {
  // Data untuk grafik Pengunjung
  const financialData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Pengunjung',
        data: [1000000, 4500000, 3200000, 5000000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
    <div className="flex-1 lg:ml-64 md:ml-64 ml-0">
        <div className="p-6 bg-transparent min-h-screen">
    {/* Header Dashboard */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 text-start">Dashboard</h1>
      <p className="text-gray-600 text-start">
        Ini adalah halaman yang menampilkan data atau informasi secara visual.
      </p>
    </div>

    {/* Kartu Pengunjung */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Jumlah Pemasukan */}
      <div className="p-4 bg-green-100 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Jumlah Pengunjung</h2>
        <p className="text-xl font-bold text-gray-900">10.000.000</p>
      </div>
    </div>
      {/* Grafik Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Grafik Pengunjung */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Grafik Pengunjung</h2>
          <Line data={financialData} options={options} />
        </div>
      </div>
  </div>
  </div>
    </>
  );
};

export default DashboardContent;
