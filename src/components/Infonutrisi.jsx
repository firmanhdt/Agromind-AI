import React from "react";

function Infonutrisi() {
  return (
    <>
    {/* Unsur - unsur*/}
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Unsur - Unsur Nutrisi Utama Pada Sapi</h2>
        <ul className="list-decimal list-inside space-y-2">
            <p>Nutrisi yang tepat sangat krusial bagi pertumbuhan, kesehatan, dan produktivitas sapi. Kebutuhan nutrisi sapi akan bervariasi tergantung pada umur, jenis kelamin, tingkat produksi (susu, daging), dan kondisi fisiologis (kebuntingan, laktasi).</p>
            <p>Komponen utama pada nutrisi sapi</p>
            <div>
                <li>
                <span className="font-semibold">karbohidrat:</span>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Sumber energi utama.</li>
                <li>Ditemukan pada rumput, jerami, konsentrat (beras, jagung, dedak).</li>
                <li>Berfungsi untuk pertumbuhan, produksi susu, dan aktivitas tubuh.</li>
            </ul>
                </li>
            </div>
            <div>
                 <li>
                <span className="font-semibold">Protein:</span>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Dibutuhkan untuk pertumbuhan jaringan tubuh, produksi susu, dan pembentukan antibodi.</li>
                <li>Sumber protein: legum (kacang-kacangan), bungkil kedelai, tepung ikan.</li>
            </ul>
                </li>
            </div>
            <div>
            <li>
                <span className="font-semibold">Lemak:</span>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Sumber energi yang sangat padat.</li>
                <li>Membantu penyerapan vitamin larut lemak (A, D, E, K).</li>
                <li>Ditemukan pada biji-bijian, minyak nabati.</li>
            </ul>
                </li>
            </div>
            <div>
                <li>
                <span className="font-semibold">Mineral:</span>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Makro mineral (kalsium, fosfor, natrium, kalium) dibutuhkan dalam jumlah besar.</li>
                <li>Mikro mineral (besi, tembaga, seng, yodium) dibutuhkan dalam jumlah kecil.</li>
                <li>Berfungsi untuk pembentukan tulang, produksi hormon, dan metabolisme.</li>
            </ul>
                </li>
            </div>
            <div>
                <li>
                    <span className="font-semibold">Vitamin:</span>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Vitamin larut lemak (A, D, E, K) dan vitamin larut air (B kompleks, C).</li>
                    <li>Berfungsi untuk menjaga kesehatan mata, kulit, sistem saraf, dan imunitas.</li>
                    </ul>
                </li>
            </div>
            <div>
                <li>
                    <span className="font-semibold">Air:</span>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Sangat penting untuk semua proses metabolisme tubuh.</li>
                    <li>Membantu pencernaan, mengatur suhu tubuh, dan transportasi zat-zat dalam tubuh.</li>
                    </ul>
                </li>
            </div>
        </ul>
    </div>

        {/* Jenis pakan Sapi*/}
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Jenis Pakan Sapi</h2>
        <ul className="list-decimal list-inside space-y-2">
            <li>Pakan Hijau: Pakan yang berasal dari tanaman hijau, seperti rumput, legum, dan hijauan pakan lainnya. Pakan hijau kaya akan serat, vitamin, dan mineral.</li>
            <li>Pakan Konsentrat: Pakan yang memiliki kandungan nutrisi yang tinggi, seperti biji-bijian (jagung, sorgum), bungkil biji (kedelai, kelapa), dan produk sampingan industri (molases). Pakan konsentrat biasanya diberikan sebagai tambahan pada pakan hijau untuk memenuhi kebutuhan nutrisi sapi.</li>
            <li>Pakan Tambahan: Mineral, vitamin, dan aditif lainnya.</li>
        </ul>
        </div>

        {/* pentingnya keseimbangan nutrisi*/}
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Pentingnya Keseimbangan Nutrisi</h2>
        <ul className="list-decimal list-inside space-y-2">
            <p>Keseimbangan nutrisi pada sapi ternak merupakan faktor kunci dalam mencapai produktivitas yang optimal dan kesehatan ternak yang baik</p>
            <li>Pertumbuhan Optimal: Nutrisi yang seimbang mendukung pertumbuhan yang sehat dan cepat, terutama pada sapi muda.</li>
            <li>Produksi yang Tinggi: Baik untuk sapi perah maupun sapi potong, nutrisi yang tepat akan meningkatkan produksi susu atau daging.</li>
            <li>Reproduksi yang Sehat: Nutrisi yang cukup akan meningkatkan kesuburan sapi betina dan kesehatan anak sapi.</li>
            <li>Kekebalan Tubuh yang Kuat: Nutrisi yang seimbang membantu meningkatkan sistem kekebalan tubuh, sehingga sapi lebih tahan terhadap penyakit.</li>
            <li>Kualitas Produk: Nutrisi yang baik akan menghasilkan produk berkualitas tinggi, baik susu maupun daging.</li>
            <li>Efisiensi Pakan: Nutrisi yang seimbang akan memaksimalkan pemanfaatan pakan, sehingga mengurangi biaya produksi.</li>
        </ul>
        </div>

    {/*Contoh Pakan Hijau*/}
    <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Hijau</h2>
        <div className="flex justify-center space-x-4 p-4">
        
      {/* Image 1 */}
      <img 
        src="/src/assets/nutrisi/gbr pakan hijau.png" 
        alt="Description of Image 1" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 2 */}
      <img 
        src="/src/assets/nutrisi/image 5.png" 
        alt="Description of Image 2" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 3 */}
      <img 
        src="/src/assets/nutrisi/image 6.png"  
        alt="Description of Image 3" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
        </div>
    </div>

    {/*Contoh Pakan Konsentrat*/}
    <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Konsentrat</h2>
        <div className="flex justify-center space-x-4 p-4">
        
      {/* Image 1 */}
      <img 
        src="/src/assets/nutrisi/gbr pakan konsentrat.png" 
        alt="Description of Image 1" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 2 */}
      <img 
        src="/src/assets/nutrisi/image 3.png" 
        alt="Description of Image 2" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 3 */}
      <img 
        src="/src/assets/nutrisi/image 4.png"  
        alt="Description of Image 3" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
        </div>
    </div>

     {/*Contoh Pakan Tambahan*/}
     <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Contoh Pakan Tambahan</h2>
        <div className="flex justify-center space-x-4 p-4">
        
      {/* Image 1 */}
      <img 
        src="/src/assets/nutrisi/gbr pakan Tambahan.png" 
        alt="Description of Image 1" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 2 */}
      <img 
        src="/src/assets/nutrisi/image 1.png" 
        alt="Description of Image 2" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
      
      {/* Image 3 */}
      <img 
        src="/src/assets/nutrisi/image 2.png"  
        alt="Description of Image 3" 
        className="w-1/3 h-auto rounded-lg shadow-md" 
      />
        </div>
    </div>
    </>
  );
}

export default Infonutrisi;