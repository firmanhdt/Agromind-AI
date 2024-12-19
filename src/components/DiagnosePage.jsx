import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DiagnosePage() {
  const [imageSrc, setImageSrc] = useState("");
  const imagePreviewRef = useRef(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState(Array(175).fill(false));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const diseasesPerPage = 175;

  const symptoms = [
    'Abses',
    'Ambing Bengkak',
    'Ambruk',
    'Anemia',
    'Anestrus',
    'Anorexia',
    'Luka Yang Sulit Sembuh',
    'Batuk',
    'Bau Busuk Yang Tidak Sedap Dari Luka Atau Area Terinfeksi',
    'Bau Tidak Sedap Dari Perdarahan Vagina (Baunya Bisa Menjadi Busuk)',
    'Berat Badan Turun Secara Signifikan',
    'Bersisik',
    'Borok Perkulitan',
    'Bulu Kusam',
    'Bulu Rontok',
    'Buta',
    'Keriput',
    'Darah Dalam Tinja (Terkadang)',
    'Daun Telinga Keropeng',
    'Dehidrasi',
    'Demam',
    'Diare',
    'Durasi Gejala Biasanya 3-4 Hari',
    'Gangguan Otot',
    'Gangguan Pada Organ Tubuh',
    'Gangguan Pencernaan',
    'Gangguan Pencernaan Seperti Diare Atau Sembelit',
    'Gangguan Penglihatan',
    'Gangguan Pertumbuhan Pada Anak Hewan',
    'Gangguan Pertumbuhan Pada Anak-Anak',
    'Gangguan Reproduksi',
    'Gangguan Sistem Kekebalan Tubuh',
    'Gangguan Sistem Saraf',
    'Gangguan Tulang',
    'Gangguan Umum Dalam Perilaku Atau Kesehatan',
    'Gatal',
    'Gatal Atau Terasa Seperti Ada Benda Asing Di Mata',
    'Gejala Flu',
    'Gelisah',
    'Gemetar',
    'Gusi Yang Bengkak',
    'Haid Tidak Teratur',
    'Hati Atau Ginjal',
    'Hernia Abdominalis',
    'Hernia Umbilicalis',
    'Hilangnya Bulu Atau Rambut Pada Area Yang Terinfeksi',
    'Janin Yang Terlilit Tali Pusar',
    'Kaku Pada Otot-Otot Tubuh',
    'Kawin Berulang',
    'Kebingungan',
    'Kegagalan Hewan Untuk Makan Atau Minum',
    'Kegagalan Organ Tertentu Karena Kekurangan Nutrisi Tertentu',
    'Keguguran',
    'Keguguran Muda',
    'Keguguran Pada Betina',
    'Kehilangan Nafsu Makan',
    'Kejang',
    'Kekukurusan',
    'Kekurusan',
    'Kelainan Kulit',
    'Kelainan Mata',
    'Kelainan Mulut',
    'Kelelahan Yang Kronis',
    'Kelesuan',
    'Kelopak Mata Melekat Saat Bangun Tidur (Terutama Pada Konjungtivitis Bakteri)',
    'Keluarnya Cairan Atau Darah Dalam Jumlah Yang Tidak Normal Dari Vulva',
    'Keluarnya Sekresi',
    'Keluarnya Sekresi Atau Mata Berair',
    'Kemerahan',
    'Kemungkinan Terjadinya Kejang',
    'Kenaikan Suhu Tubuh (Demam)',
    'Kepala Atau Anggota Badan Janin Terlihat Tidak Normal Atau Terdistorsi',
    'Kerontokan Bulu',
    'Kerontokan Rambut',
    'Kesadaran Menurun',
    'Kesulitan Berdiri',
    'Kesulitan Bergerak',
    'Kesulitan Bergerak Atau Berdiri',
    'Kesulitan Bernapas',
    'Kesulitan Dalam Perkawinan',
    'Kesulitan Dalam Proses Persalinan',
    'Kesulitan Kencing',
    'Keterlambatan Dalam Pengosongan Perut',
    'Keterlambatan Dalam Proses Persalinan',
    'Kornea Mata Keruh',
    'Kram Perut Atau Nyeri Perut',
    'Kualitas Bulu Atau Kulit Yang Buruk',
    'Kulit Kering',
    'Kulit Kering Dan Bersisik',
    'Kurangnya Urin',
    'Lahir Mati',
    'Lahir Normal',
    'Lama Waktu Persalinan Yang Tidak Normal',
    'Lelah',
    'Lemah',
    'Lemas',
    'Liur Berdarah',
    'Liur Berlebihan',
    'Luka Berdarah',
    'Luka Penis',
    'Masalah Gigi Dan Gusi',
    'Masalah Kulit Seperti Kering',
    'Masalah Pada Perkembangan Otak Pada Anak-Anak',
    'Masalah Pernapasan',
    'Masalah Reproduksi Pada Wanita',
    'Mata Berair',
    'Mata Berdarah',
    'Mata Cekung',
    'Mata Iritasi',
    'Mata Merah',
    'Mata Terasa Kering Atau Terasa Pasir Di Mata',
    'Mencret',
    'Mengedipkan Mata Lebih Sering Dari Biasanya',
    'Menggaruk Atau Menggosok Bagian Tubuh Tertentu',
    'Mual',
    'Mulut Kering',
    'Mungkin Terjadi Bisingan Pada Rongga Dada Atau Pernapasan Yang Cepat',
    'Muntah',
    'Nyeri Atau Kram Perut Bagian Bawah',
    'Patah Tulang Kaki',
    'Pembengkakan Pada Area Terinfeksi',
    'Pembengkakan Pada Kelopak Mata',
    'Pembengkakan Pada Sendi-Sendi Kaki',
    'Pembentukan Benjolan Atau Lepuh Pada Kulit',
    'Pendarahan Atau Keluarnya Cairan Dari Vulva',
    'Pengeluaran Nanah Dari Mata',
    'Penglihatan Kabur',
    'Penurunan Berat Badan',
    'Penurunan Berat Badan Yang Signifikan',
    'Penurunan Produksi Susu Pada Sapi Perah',
    'Penurunan Suhu Tubuh Setelah Demam',
    'Peradangan Kulit',
    'Perasaan Penuh Atau Tertekan Di Perut Bagian Bawah',
    'Perdarahan Vagina Yang Berkepanjangan Setelah Persalinan',
    'Perilaku Gelisah Atau Gatal',
    'Perkulitan',
    'Pernapasan Cepat',
    'Perubahan Perilaku',
    'Perut Kembung',
    'Perut Yang Membesar Secara Tiba-Tiba',
    'Perut Yang Membuncit',
    'Pilek Atau Sakit Tenggorokan',
    'Pincang',
    'Posisi Atau Presentasi Janin Yang Tidak Benar (Misalnya Kepala Tersendat)',
    'Produksi Air Liur Meningkat',
    'Produksi Lendir Atau Nanah Pada Mata (Terutama Jika Infeksi Bakteri)',
    'Produksi Ludah Berlebihan',
    'Prolaps Anus',
    'Radang Mata',
    'Radang Telinga',
    'Rahang Bawah Bengkak',
    'Rahim Bernanah',
    'Rambut Kering',
    'Rambut Mudah Rontok',
    'Rasa Nyeri Atau Ketidaknyamanan Di Mata',
    'Rasa Perih Atau Sakit Di Mata',
    'Retensi Placenta',
    'Sakit Otot',
    'Sakit Sendi',
    'Sapi Kesulitan Untuk Melahirkan',
    'Sapi Menunjukkan Tanda-Tanda Kesakitan Yang Tidak Biasa',
    'Sapi Merintih',
    'Sapi Tampak Tidak Nyaman',
    'Sekresi Cairan Atau Nanah Dari Area Terinfeksi',
    'Sembelit',
    'Sempoyongan',
    'Sensasi Panas Di Mata',
    'Sensitivitas Terhadap Cahaya (Fotofobia)',
    'Sering Mengunyah Atau Menggerogoti Benda-Benda Di Sekitarnya',
    'Suara Perut Yang Berbunyi-Bunyi',
    'Suhu Tubuh Yang Meningkat',
    'Tanda Lain',
    'Terjadi Kejang-Kejang',
    'Tidak Sakit',
    'Tremor'
    ]

     // Fungsi untuk menangani checkbox gejala
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const index = symptoms.indexOf(value);
    setSelectedSymptoms((prev) => {
      const newSelectedSymptoms = [...prev];
      newSelectedSymptoms[index] = !newSelectedSymptoms[index]; // Toggle the checkbox state
      return newSelectedSymptoms;
    });
  };

  // Fungsi untuk mengirim data ke backend
  const handleDiagnose = async () => {
    if (selectedSymptoms.every(item => !item) && !imageSrc) {
      alert("Pilih minimal satu gejala atau upload foto untuk mendiagnosa.");
      return;
    }

    try {
      setLoading(true);
      let result;

      // If there's an image, send it for prediction
      if (imageSrc) {
        console.log('Image Source:', imageSrc); // Log untuk memastikan gambar yang dikirim
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('image', blob);

        // Log sebelum mengirim ke backend
        console.log('Sending image to backend...');
        const imageResponse = await fetch('https://app-predict-image.1ongwfft5soj.us-south.codeengine.appdomain.cloud/imagePrediction', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          }
        });

        // Cek apakah respons berhasil
        if (!imageResponse.ok) {
          const errorMessage = await imageResponse.text(); // Ambil pesan kesalahan
          console.error('Error from backend:', errorMessage);
          throw new Error(`Backend error: ${errorMessage}`);
        }

        const imageResult = await imageResponse.json();
        console.log('Image Prediction Result:', imageResult);
        result = imageResult;
      }


      // If there are symptoms selected, send them for prediction
      if (selectedSymptoms.some(item => item)) {
        // Create array of 175 elements with 0s and 1s
        const symptomValues = Array(175).fill(0);
        selectedSymptoms.forEach((isSelected, index) => {
          if (isSelected) {
            symptomValues[index] = 1; // Set 1 jika gejala dipilih
          }
        });
        const symptomsResponse = await fetch('https://app-predict-image.1ongwfft5soj.us-south.codeengine.appdomain.cloud/diseasePrediction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'inputGejala': symptomValues }), // Kirim data gejala
        });

        if (!symptomsResponse.ok) {
          throw new Error('Symptoms prediction failed');
        }

        const symptomsResult = await symptomsResponse.json();
        result = symptomsResult;
      }

      // Navigate to results page with the prediction
      navigate('/hasil', { 
        state: { 
          diagnosis: result, 
          symptoms: selectedSymptoms,
          image: imageSrc,
        } 
      });

    } catch (error) {
      console.error('Error during prediction:', error);
      alert('Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.');
    } finally{
      setLoading(false);
    }
  };

  // Fungsi untuk menangani upload gambar
  const loadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result); // Menyimpan URL gambar ke state
        console.log('Image Source:', e.target.result); // Log untuk debugging
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset ke halaman pertama saat pencarian
  };

  // Filter gejala berdasarkan pencarian
  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.toLowerCase().includes(search.toLowerCase())
  );

  // Logika untuk memeriksa apakah checkbox terpilih
  const isChecked = (symptom) => {
    const index = symptoms.indexOf(symptom);
    return selectedSymptoms[index]; // Mengembalikan status checkbox berdasarkan index
  };

  // Logika pagination
  const totalPages = Math.ceil(filteredSymptoms.length / diseasesPerPage);
  const indexOfLastSymptom = currentPage * diseasesPerPage;
  const indexOfFirstSymptom = indexOfLastSymptom - diseasesPerPage;
  const currentSymptoms = filteredSymptoms.slice(indexOfFirstSymptom, indexOfLastSymptom);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-lg relative">
        <div className="absolute top-2 left-2 text-red-500 text-xl">•</div>
        <div className="absolute top-4 left-10 text-blue-400 text-xs">•</div>
        <div className="absolute bottom-3 right-4 text-purple-400 text-xl">&#x21BA;</div>
        <div className="absolute bottom-6 left-6 text-yellow-400 text-xl">&#x21BB;</div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Diagnosa Penyakit Ternak Anda Sekarang</h2>
        <p className="text-gray-600">Fitur diagnosa ini akan membantu anda dalam mendiagnosa penyakit pada sapi anda</p>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Diagnosa Penyakit Sapimu</h2>
          <p className="text-gray-600 mb-6">
            Upload Foto sapi mu di posisi samping yang mengalami penyakit lalu pilih gejala
          </p>

          {/* Upload Foto Section */}
          <div className="mb-6 flex justify-center">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <div className="w-48 h-48 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Pratinjau gambar */}
                {imageSrc ? (
                  <img
                    ref={imagePreviewRef}
                    src={imageSrc}
                    alt="Upload Foto"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <svg
                    id="uploadIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4V12m0 0v8m0-8H4m8 0h8"
                    />
                  </svg>
                )}
              </div>
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={loadImage}
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]">
              Upload Foto
            </button>
          </div>
        </div>
      </div>

    <div class="flex justify-center items-center bg-gray-100">
    <div className="bg-yellow-100 p-6 rounded-lg w-full">
    <h2 className="text-center font-semibold text-lg mb-4">Diagnosa</h2>
    <div className="overflow-x-auto"> {/* Enable horizontal scrolling */}
        {/* Search Bar */}
    <div className="flex items-center mb-6">
        <input
            type="text"
            placeholder="Pencarian Gejala"
            value={search}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-yellow-400 text-center"
        />
        <button className="bg-yellow-400 p-3 rounded-r-lg">
            <img src="penyakit/searchIcon.png" alt="Search" className="w-6 h-6" />
        </button>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm"> {/* Adjust the number of columns */}
            {currentSymptoms.map((symptom, index) => (
                <label key={index} className="flex items-center font-semibold">
                    <input
                        type="checkbox"
                        value={symptom}
                        className="mr-2"
                        onChange={handleCheckboxChange}
                        checked={isChecked(symptom)} // Periksa apakah checkbox harus terpilih
                    />
                    {symptom}
                </label>
            ))}
        </div>
    </div>
    <div className="flex justify-center mt-6">
        <button
            onClick={handleDiagnose}
            disabled={loading}
            className={`bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808] ${loading && 'opacity-80 cursor-not-allowed hover:bg-[#362B0E] animate-pulse'}`}
        >
            {loading ? "Sedang mendiagnosa..." : "Kirim Diagnosa"}
        </button>
    </div>
</div>
</div>
    </>
  );
}

export default DiagnosePage;
