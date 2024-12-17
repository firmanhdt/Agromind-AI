import React, { useState, useEffect } from 'react';
import searchIcon from '../assets/penyakit/searchIcon.png';
import diseasesData from '../data/diseases.json';

function DiseasePopup({ disease, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto transition-transform transform scale-100">
        <h2 className="text-xl font-semibold">{disease.title}</h2>
        <img src={disease.imageUrl} alt={disease.title} className="h-40 w-full object-cover my-4" />
        <p>{disease.description}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
}

function Infopenyakit() {
  const [search, setSearch] = useState('');
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const diseasesPerPage = 8;

  useEffect(() => {
    setDiseases(diseasesData.diseases);
  }, []);

  const handleSearchChange = (e) => {
    setLoading(true);
    setSearch(e.target.value);
    setCurrentPage(1);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const filteredDiseases = diseases.filter((disease) =>
    disease.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDiseases.length / diseasesPerPage);

  const indexOfLastDisease = currentPage * diseasesPerPage;
  const indexOfFirstDisease = indexOfLastDisease - diseasesPerPage;
  const currentDiseases = filteredDiseases.slice(indexOfFirstDisease, indexOfLastDisease);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-lg relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Informasi Data Penyakit Hewan Ternak</h2>
        <p className="text-gray-600">Kami memberikan informasi terbaru tentang penyakit yang sering terjangkit pada hewan ternak sapi.</p>
      </div>

      <div className="max-w-screen-lg mx-auto p-4">
        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Pencarian Penyakit"
            value={search}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-yellow-400"
          />
          <button className="bg-yellow-400 p-3 rounded-r-lg">
            <img src={searchIcon} alt="Search" className="w-6 h-6" />
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}

        <h1 className="text-2xl font-bold mb-4">Data Penyakit</h1>

        {/* Grid Penyakit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDiseases.map((disease, index) => (
            <div key={index}
                 className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg ${selectedDisease === disease ? 'border border-yellow-500' : ''}`}
                 onClick={() => setSelectedDisease(disease)}>
              <img src={disease.imageUrl} alt={disease.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{disease.title}</h2>
                <p className="text-sm text-gray-700 mt-2">{disease.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-yellow-400 hover:bg-yellow-500'}`}
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1 ? 'bg-yellow-400' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-yellow-400 hover:bg-yellow-500'}`}
          >
            Next
          </button>
        </div>

        {selectedDisease && (
          <DiseasePopup 
            disease={selectedDisease} 
            onClose={() => setSelectedDisease(null)} 
          />
        )}
      </div>
    </>
  );
}

export default Infopenyakit;