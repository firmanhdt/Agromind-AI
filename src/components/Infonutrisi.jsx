import React, { useState } from "react";

function Infonutrisi() {
  // State to manage which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to handle section click
  const handleSectionClick = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId); // Toggle the section
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Nutrisi Utama Pada Sapi */}
        {expandedSection === null || expandedSection === "nutrisiUtama" ? (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleSectionClick("nutrisiUtama")}>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Unsur - Unsur Nutrisi Utama Pada Sapi
            </h2>
            {expandedSection === "nutrisiUtama" && (
              <div>
                <p>Nutrisi yang tepat sangat krusial bagi pertumbuhan, kesehatan, dan produktivitas sapi.</p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                  {renderNutrisiItem("Karbohidrat", [
                    "Sumber energi utama.",
                    "Ditemukan pada rumput, jerami, konsentrat (beras, jagung, dedak).",
                    "Berfungsi untuk pertumbuhan, produksi susu, dan aktivitas tubuh."
                  ])}
                  {renderNutrisiItem("Protein", [
                    "Dibutuhkan untuk pertumbuhan jaringan tubuh, produksi susu, dan pembentukan antibodi.",
                    "Sumber protein: legum (kacang-kacangan), bungkil kedelai, tepung ikan."
                  ])}
                  {renderNutrisiItem("Lemak", [
                    "Sumber energi yang sangat padat.",
                    "Membantu penyerapan vitamin larut lemak (A, D, E, K).",
                    "Ditemukan pada biji-bijian dan minyak nabati."
                  ])}
                  {renderNutrisiItem("Mineral", [
                    "Makro mineral (kalsium, fosfor, natrium, kalium) dibutuhkan dalam jumlah besar.",
                    "Mikro mineral (besi, tembaga, seng, yodium) dibutuhkan dalam jumlah kecil.",
                    "Berfungsi untuk pembentukan tulang, produksi hormon, dan metabolisme."
                  ])}
                  {renderNutrisiItem("Vitamin", [
                    "Vitamin larut lemak (A, D, E, K) dan vitamin larut air (B kompleks, C).",
                    "Berfungsi untuk menjaga kesehatan mata, kulit, sistem saraf, dan imunitas."
                  ])}
                  {renderNutrisiItem("Air", [
                    "Sangat penting untuk semua proses metabolisme tubuh.",
                    "Membantu pencernaan, mengatur suhu tubuh, dan transportasi zat-zat dalam tubuh."
                  ])}
                </ul>
              </div>
            )}
          </div>
        ) : null}

        {/* Card for Jenis Pakan Sapi */}
        {expandedSection === null || expandedSection === "jenisPakan" ? (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleSectionClick("jenisPakan")}>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Jenis Pakan Sapi
            </h2>
            {expandedSection === "jenisPakan" && (
              <ul className="list-decimal list-inside space-y-2 mt-4">
                <li>Pakan Hijau: Pakan yang berasal dari tanaman hijau seperti rumput dan legum. Kaya akan serat dan vitamin.</li>
                <li>Pakan Konsentrat: Pakan yang memiliki kandungan nutrisi tinggi seperti biji-bijian (jagung, sorgum) dan produk sampingan industri.</li>
                <li>Pakan Tambahan: Mineral dan vitamin sebagai suplemen.</li>
              </ul>
            )}
          </div>
        ) : null}

        {/* Card for Pentingnya Keseimbangan Nutrisi */}
        {expandedSection === null || expandedSection === "keseimbangan" ? (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleSectionClick("keseimbangan")}>
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              Pentingnya Keseimbangan Nutrisi
            </h2>
            {expandedSection === "keseimbangan" && (
              <ul className="list-decimal list-inside space-y-2 mt-4">
                <li>Keseimbangan nutrisi pada sapi ternak merupakan faktor kunci dalam mencapai produktivitas yang optimal.</li>
                <li>Pertumbuhan Optimal: Nutrisi yang seimbang mendukung pertumbuhan yang sehat.</li>
                <li>Produksi Tinggi: Meningkatkan produksi susu atau daging.</li>
                <li>Reproduksi Sehat: Meningkatkan kesuburan sapi betina.</li>
                <li>Kekebalan Tubuh Kuat: Meningkatkan sistem kekebalan tubuh.</li>
                <li>Kualitas Produk: Menghasilkan produk berkualitas tinggi.</li>
                <li>Efisiensi Pakan: Memaksimalkan pemanfaatan pakan.</li>
              </ul>
            )}
          </div>
        ) : null}
      </div>

      {/* Contoh Pakan Hijau */}
      {expandedSection === null && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Hijau</h2>
          <div className="flex justify-center space-x-4 p-4">
            <img src="/src/assets/nutrisi/gbr pakan hijau.png" alt="Contoh Pakan Hijau 1" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 5.png" alt="Contoh Pakan Hijau 2" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 6.png" alt="Contoh Pakan Hijau 3" className="w-1/3 h-auto rounded-lg shadow-md" />
          </div>
        </div>
      )}

      {/* Contoh Pakan Konsentrat */}
      {expandedSection === null && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Konsentrat</h2>
          <div className="flex justify-center space-x-4 p-4">
            <img src="/src/assets/nutrisi/gbr pakan konsentrat.png" alt="Contoh Pakan Konsentrat 1" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 3.png" alt="Contoh Pakan Konsentrat 2" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 4.png" alt="Contoh Pakan Konsentrat 3" className="w-1/3 h-auto rounded-lg shadow-md" />
          </div>
        </div>
      )}

      {/* Contoh Pakan Tambahan */}
      {expandedSection === null && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Tambahan</h2>
          <div className="flex justify-center space-x-4 p-4">
            <img src="/src/assets/nutrisi/gbr pakan Tambahan.png" alt="Contoh Pakan Tambahan 1" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 1.png" alt="Contoh Pakan Tambahan 2" className="w-1/3 h-auto rounded-lg shadow-md" />
            <img src="/src/assets/nutrisi/image 2.png" alt="Contoh Pakan Tambahan 3" className="w-1/3 h-auto rounded-lg shadow-md" />
          </div>
        </div>
      )}
    </>
  );
}

function renderNutrisiItem(title, items) {
  return (
    <li>
      <span className="font-semibold">{title}:</span>
      <ul className="list-disc list-inside space-y-1 ml-4">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default Infonutrisi;