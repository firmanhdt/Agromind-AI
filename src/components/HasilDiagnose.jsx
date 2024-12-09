import React from "react";
import { useLocation } from "react-router-dom";

function HasilDiagnose() {
  const location = useLocation();
  const { diagnosis, symptoms } = location.state || {};

  // Informasi penyebab dan pengobatan untuk Mastitis
  const causes = [
    "Infeksi bakteri (Staphylococcus aureus, Streptococcus agalactiae, Escherichia coli, Klebsiella spp)",
    "Kebersihan yang buruk",
    "Trauma pada ambing",
    "Ketidakseimbangan hormon",
    "Sistem kekebalan tubuh yang lemah"
  ];

  const treatments = [
    "Antibiotik (intramammary atau sistemik)",
    "Perawatan lokal (kompres air hangat)",
    "Pengobatan gejala (obat anti-inflamasi)",
    "Pengeringan sementara untuk pemulihan"
  ];

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <div className="bg-yellow-100 w-full max-w-3xl p-4 rounded-lg mt-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800">{diagnosis}</h2>
        </div>
        
        <div className="mt-4">
          <img src="https://th.bing.com/th/id/OIP.tMqfiQ1jMlfVUcVKZ3HoZQHaEV?rs=1&pid=ImgDetMain" alt={diagnosis} className="w-full max-w-md rounded-lg shadow-md"/>
        </div>
      </div>

      {/* Tanda dan Gejala */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Gejala yang Dipilih</h2>
        <ul className="list-decimal list-inside space-y-2">
          {symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>

      {/* Penyebab */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Penyebab</h2>
        <ul className="list-disc list-inside space-y-2">
          {causes.map((cause, index) => (
            <li key={index}>{cause}</li>
          ))}
        </ul>
      </div>

      {/* Pengobatan */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Pengobatan</h2>
        <ul className="list-disc list-inside space-y-2">
          {treatments.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HasilDiagnose;
