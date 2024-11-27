import React, { useEffect, useState } from "react";

const PengunjungHistory = () => {
  const [pengunjungs, setPengunjungs] = useState([]);

  const fetchPengunjungs = async () => {
    const response = await fetch("http://localhost:3000/api/pengunjungs"); // Endpoint untuk mendapatkan daftar pengunjung
    const data = await response.json();
    setPengunjungs(data);
  };

  useEffect(() => {
    fetchPengunjungs();
  }, []);

  return (
    <div className="p-4 py-13 lg:ml-64 flex-1 min-h-screen bg-gray-50">
      <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
          <h2 className="text-xl font-semibold">Data Pengunjung</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
          Jumlah Data Pengunjung AGROMINDAI
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center gap-2 text-gray-600 md:w-auto w-full justify-center md:justify-start">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Filter
            </button>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Pencarian"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-3 text-center text-sm font-semibold">NO</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">NAMA PENGUNJUNG</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">EMAIL</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">NO_HP</th>
              </tr>
            </thead>
            <tbody>
              {pengunjungs.map((pengunjung) => (
                <tr key={pengunjung.no} className="border-b">
                  <td className="px-4 py-4 text-center text-sm">{pengunjung.no}</td>
                  <td className="px-4 py-4 text-center text-sm">{pengunjung.nama}</td>
                  <td className="px-4 py-4 text-center text-sm">{pengunjung.email}</td>
                  <td className="px-4 py-4 text-center text-sm">{pengunjung.no_hp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex flex-col md:flex-row justify-between items-end gap-4">
        <p className="text-sm text-gray-600">Showing 1 to 5 of 1.324 entries</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Previous</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">3</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengunjungHistory;
