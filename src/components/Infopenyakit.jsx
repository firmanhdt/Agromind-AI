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

function Infopenyakit() {
  const [search, setSearch] = useState('');

  // Filter penyakit berdasarkan input pencarian
  const filteredDiseases = diseases.filter((disease) =>
    disease.title.toLowerCase().includes(search.toLowerCase())
  );
    return (
        <>
        <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-lg relative">
        <div className="absolute top-2 left-2 text-red-500 text-xl">•</div>
        <div className="absolute top-4 left-10 text-blue-400 text-xs">•</div>
        <div className="absolute bottom-3 right-4 text-purple-400 text-xl">&#x21BA;</div>
        <div className="absolute bottom-6 left-6 text-yellow-400 text-xl">&#x21BB;</div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Infromasi Data Penyakit Hewan Ternak</h2>
        <p className="text-gray-600">Kami memberikan informasi terbaru tentang penyaki-penyakit yang sering terjangkit pada hewan ternak sapi. Yang akan membuat ana para peternak menjadi lebih mengetahui tentang banyaknya penyakit yang dapat terjangkit pada hewan ternak anda </p>
      </div>

      <div className="max-w-screen-lg mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Pencarian Penyakit"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-yellow-400"
        />
        <button className="bg-yellow-400 p-3 rounded-r-lg">
          <img src={searchIcon} alt="Search" className="w-6 h-6" />
        </button>
      </div>
      </div>

        <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Penyakit</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDiseases.map((disease, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={disease.imageUrl} alt={disease.title} className="h-40 w-full object-cover" />
            
            <div className="p-4">
                <h2 className="font-semibold text-lg">{disease.title}</h2>
                <p className="text-sm text-gray-700 mt-2">{disease.description}</p>
            </div>
            </div>
        ))}
        </div>
        </div>
        </>
    );
  }
export default Infopenyakit;