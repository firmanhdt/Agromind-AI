import React from "react";
import { useLocation } from "react-router-dom";

function HasilDiagnose() {
  const location = useLocation();
  const { diagnosis, symptoms, image } = location.state || {};
    const token = localStorage.getItem('token'); // Get the user's token
    console.log(token)

  // console.log(imageSrc, diagnosis)

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <div className="bg-yellow-100 w-full max-w-3xl p-4 rounded-lg mt-8">
          <h2 className="text-center text-2xl font-semibold text-gray-800">{diagnosis.Penyakit}</h2>
        </div>
        
        <div className="mt-4">
          {image && (
            <img 
              src={image} 
              alt={diagnosis.Penyakit} 
              className="w-full max-w-md rounded-lg shadow-md"
            />
          )}
        </div>
      </div>

      {/* Tanda dan Gejala */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Gejala yang Dipilih</h2>
        <ul className="list-decimal list-inside space-y-2">
          {diagnosis["Gejala dan tanda"] && diagnosis["Gejala dan tanda"].map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>

      {/* Penyebab */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Penyebab</h2>
        <ul className="list-disc list-inside space-y-2">
          {diagnosis.Penyebab.map((cause, index) => (
            <li key={index}>{cause}</li>
          ))}
        </ul>
      </div>

      {/* Pengobatan */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Pengobatan</h2>
        <ul className="list-disc list-inside space-y-2">
          {diagnosis.Pengobatan.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))}
        </ul>
      </div>

      {/* Pengobatan */}
      {/* 
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Pengobatan</h2>
        <ul className="list-disc list-inside space-y-2">
          {token ? 
          diagnosis.Pengobatan.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))
          : <p><a className="text-orange-500 underline" href="/login">Login</a> terlebih dahulu untuk melihat pengobatan</p>
          }
        </ul>
      </div>
      */}
    </>
  );
}

export default HasilDiagnose;
