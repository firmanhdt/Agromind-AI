// src/components/DashboardContent.jsx
import React, { useState, useEffect } from "react";
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
  const [pengunjungCount, setPengunjungCount] = useState(0);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default tahun sekarang
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Pengunjung',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/pengunjungs");
      const data = await response.json();
      setPengunjungCount(data.length);

      // Mengelompokkan data per bulan untuk tahun yang dipilih
      const groupedData = groupDataByMonth(data, selectedYear);
      
      setChartData({
        labels: Object.keys(groupedData), // ['Januari', 'Februari', dst]
        datasets: [{
          label: `Pengunjung Tahun ${selectedYear}`,
          data: Object.values(groupedData),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }],
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fungsi untuk mengelompokkan data per bulan
  const groupDataByMonth = (data, year) => {
    const months = {
      'Januari': 0,
      'Februari': 0,
      'Maret': 0,
      'April': 0,
      'Mei': 0,
      'Juni': 0,
      'Juli': 0,
      'Agustus': 0,
      'September': 0,
      'Oktober': 0,
      'November': 0,
      'Desember': 0
    };

    data.forEach(user => {
      const date = new Date(user.createdAt);
      if (date.getFullYear() === year) {
        const monthNames = Object.keys(months);
        months[monthNames[date.getMonth()]]++;
      }
    });

    return months;
  };

  // Handler untuk perubahan tahun
  const handleYearChange = (increment) => {
    setSelectedYear(prev => prev + increment);
  };

  useEffect(() => {
    fetchUserData();
  }, [selectedYear]); // Refetch ketika tahun berubah

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Statistik Pengunjung Tahun ${selectedYear}`
      }
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
              <p className="text-xl font-bold text-gray-900">{pengunjungCount}</p>
            </div>
          </div>
          {/* Grafik Section dengan kontrol tahun */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Grafik Pengunjung</h2>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleYearChange(-1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    &lt;
                  </button>
                  <span className="font-semibold">{selectedYear}</span>
                  <button 
                    onClick={() => handleYearChange(1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
