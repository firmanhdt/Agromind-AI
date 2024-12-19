import React, { useState } from "react";
import gbrPakanHijauNutrisi from '../assets/nutrisi/gbr pakan hijau.png';
import gbrPakanKonsentrat from '../assets/nutrisi/gbr pakan konsentrat.png';
import gbrPakanTambahan from '../assets/nutrisi/gbr pakan Tambahan.png';
import image6 from '../assets/nutrisi/image 5.png';
import image5 from '../assets/nutrisi/image 6.png';
import image3 from '../assets/nutrisi/image 3.png';
import image4 from '../assets/nutrisi/image 4.png';
import image1 from '../assets/nutrisi/image 1.png';
import image2 from '../assets/nutrisi/image 2.png';

function Infonutrisi() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [search, setSearch] = useState('');

  const handleSectionClick = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId); // Toggle the section
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Nutritional data
  const nutritionalData = [
    {
      id: "nutrisiUtama",
      title: "Unsur - Unsur Nutrisi Utama Pada Sapi",
      description: "Nutrisi yang tepat sangat krusial bagi pertumbuhan, kesehatan, dan produktivitas sapi.",
      details: [
        { title: "Karbohidrat", items: ["Sumber energi utama.", "Ditemukan pada rumput, jerami, konsentrat (beras, jagung, dedak).", "Berfungsi untuk pertumbuhan, produksi susu, dan aktivitas tubuh."] },
        { title: "Protein", items: ["Dibutuhkan untuk pertumbuhan jaringan tubuh, produksi susu, dan pembentukan antibodi.", "Sumber protein: legum (kacang-kacangan), bungkil kedelai, tepung ikan."] },
        { title: "Lemak", items: ["Sumber energi yang sangat padat.", "Membantu penyerapan vitamin larut lemak (A, D, E, K).", "Ditemukan pada biji-bijian dan minyak nabati."] },
        { title: "Mineral", items: ["Makro mineral (kalsium, fosfor, natrium, kalium) dibutuhkan dalam jumlah besar.", "Mikro mineral (besi, tembaga, seng, yodium) dibutuhkan dalam jumlah kecil.", "Berfungsi untuk pembentukan tulang, produksi hormon, dan metabolisme."] },
        { title: "Vitamin", items: ["Vitamin larut lemak (A, D, E, K) dan vitamin larut air (B kompleks, C).", "Berfungsi untuk menjaga kesehatan mata, kulit, sistem saraf, dan imunitas."] },
        { title: "Air", items: ["Sangat penting untuk semua proses metabolisme tubuh.", "Membantu pencernaan, mengatur suhu tubuh, dan transportasi zat-zat dalam tubuh."] }
      ]
    },
    {
      id: "jenisPakan",
      title: "Jenis Pakan Sapi",
      details: [
        "Pakan Hijau: Pakan yang berasal dari tanaman hijau seperti rumput dan legum. Kaya akan serat dan vitamin.",
        "Pakan Konsentrat: Pakan yang memiliki kandungan nutrisi tinggi seperti biji-bijian (jagung, sorgum) dan produk sampingan industri.",
        "Pakan Tambahan: Mineral dan vitamin sebagai suplemen."
      ]
    },
    {
      id: "keseimbangan",
      title: "Pentingnya Keseimbangan Nutrisi",
      details: [
        "Keseimbangan nutrisi pada sapi ternak merupakan faktor kunci dalam mencapai produktivitas yang optimal.",
        "Pertumbuhan Optimal: Nutrisi yang seimbang mendukung pertumbuhan yang sehat.",
        "Produksi Tinggi: Meningkatkan produksi susu atau daging.",
        "Reproduksi Sehat: Meningkatkan kesuburan sapi betina.",
        "Kekebalan Tubuh Kuat: Meningkatkan sistem kekebalan tubuh.",
        "Kualitas Produk: Menghasilkan produk berkualitas tinggi.",
        "Efisiensi Pakan: Memaksimalkan pemanfaatan pakan."
      ]
    }
  ];

  // Filter nutritional data based on search input
  const filteredNutritionalData = nutritionalData.filter(data =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-lg relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Informasi Nutrisi Sapi</h2>
        <p className="text-gray-600">Kami memberikan informasi terbaru tentang nutrisi yang penting bagi kesehatan sapi.</p>
      </div>

      <div className="max-w-screen-lg mx-auto p-4">
        {/* Search Bar */}
        {/* <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Pencarian Nutrisi"
            value={search}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-yellow-400"
          />
          <button className="bg-yellow-400 p-3 rounded-r-lg">
            <img src="/penyakit/searchIcon.png" alt="Search" className="w-6 h-6" />
          </button>
        </div> */}

        <h1 className="text-2xl font-bold mb-4">Data Nutrisi</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNutritionalData.map((data) => (
            <div key={data.id}
              className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${expandedSection === data.id ? 'border border-yellow-500' : ''}`}
              onClick={() => handleSectionClick(data.id)}>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">{data.title}</h2>
              {expandedSection === data.id && (
                <div>
                  <p>{data.description}</p>
                  <ul className="list-decimal list-inside space-y-2 mt-4">
                    {data.details.map((detailItem) => (
                      typeof detailItem === 'string' ? (
                        <li key={detailItem}>{detailItem}</li>
                      ) : (
                        <li key={detailItem.title}>
                          <span className="font-semibold">{detailItem.title}:</span>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {detailItem.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Example Images for Green Feed */}
        {expandedSection === null && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Hijau</h2>
            <div className="flex justify-center space-x-4 p-4">
              <img src={gbrPakanHijauNutrisi} alt="Contoh Pakan Hijau 1" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image5} alt="Contoh Pakan Hijau 2" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image6} alt="Contoh Pakan Hijau 3" className="w-1/3 h-auto rounded-lg shadow-md" />
            </div>
          </div>
        )}

        {/* Example Images for Concentrate Feed */}
        {expandedSection === null && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Konsentrat</h2>
            <div className="flex justify-center space-x-4 p-4">
              <img src={gbrPakanKonsentrat} alt="Contoh Pakan Konsentrat 1" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image3} alt="Contoh Pakan Konsentrat 2" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image4} alt="Contoh Pakan Konsentrat 3" className="w-1/3 h-auto rounded-lg shadow-md" />
            </div>
          </div>
        )}

        {/* Example Images for Supplement Feed */}
        {expandedSection === null && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Tambahan</h2>
            <div className="flex justify-center space-x-4 p-4">
              <img src={gbrPakanTambahan} alt="Contoh Pakan Tambahan 1" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image1} alt="Contoh Pakan Tambahan 2" className="w-1/3 h-auto rounded-lg shadow-md" />
              <img src={image2} alt="Contoh Pakan Tambahan 3" className="w-1/3 h-auto rounded-lg shadow-md" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Infonutrisi;