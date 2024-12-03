import React, { useState } from 'react';
import searchIcon from '../assets/penyakit/searchIcon.png';

const diseases = [
  {
    title: 'Brucellosis',
    description: 'Brucellosis adalah penyakit menular seksual yang menyebabkan keguguran pada sapi betina. Gejalanya meliputi keguguran berulang, kemandulan, dan retensi plasenta.',
    imageUrl: '/src/assets/penyakit/image 1.jpg'
  },
  {
    title: 'Leptospirosis',
    description: 'Leptospirosis adalah penyakit akut yang disebabkan oleh bakteri leptospira. Gejalanya meliputi demam tinggi, kuning, lemas, dan gangguan urinal.',
    imageUrl: '/src/assets/penyakit/image 2.jpeg'
  },
  {
    title: 'Anthrax',
    description: 'Anthrax adalah penyakit akut yang disebabkan oleh bakteri Bacillus anthracis. Gejalanya meliputi demam tinggi, kesulitan bernapas, dan darah keluar dari lubang tubuh.',
    imageUrl: '/src/assets/penyakit/image 3.jpg'
  },
  {
    title: 'Mastitis',
    description: 'Mastitis adalah peradangan pada ambing sapi yang disebabkan oleh bakteri. Gejalanya meliputi pembengkakan kemerahan, dan nyeri pada ambing, serta perubahan pada susu.',
    imageUrl: '/src/assets/penyakit/image 4.jpg'
  },
  {
    title: 'Cacing Hati',
    description: 'Cacing hati adalah parasit yang hidup di hati sapi. Gejalanya meliputi penurunan berat badan, perut membuncit, dan anemia.',
    imageUrl: '/src/assets/penyakit/image 5.jpeg'
  },
  {
    title: 'Babesiosis',
    description: 'Babesiosis adalah penyakit yang disebabkan oleh parasit protozoa Babesia. Gejalanya meliputi demam tinggi, anemia, dan warna lendir merah tua.',
    imageUrl: '/src/assets/penyakit/images 6.jpeg'
  },
  {
    title: 'Hipokalsemia',
    description: 'Hipokalsemia adalah kekurangan kalsium dalam darah. Gejalanya meliputi kelemahan otot, kelumpuhan, dan gangguan jantung.',
    imageUrl: '/src/assets/penyakit/image 7.jpg'
  },
  {
    title: 'Penyakit Kulit (LSD)',
    description: 'LSD adalah penyakit kulit infeksius yang disebabkan oleh virus Lumpy Skin Disease Virus (LSD). Virus ini umumnya menyerang hewan sapi dan kerbau.',
    imageUrl: '/src/assets/penyakit/image 8.jpg'
  },
];

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

  const handleSearchChange = (e) => {
    setLoading(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 300); // Adjust as needed
  };

  const filteredDiseases = diseases.filter((disease) =>
    disease.title.toLowerCase().includes(search.toLowerCase())
  );

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDiseases.map((disease, index) => (
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