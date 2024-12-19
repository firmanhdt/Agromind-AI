import React from 'react'
import logo from "../assets/agromind.png";

export const Landingpage = () => {
  return (
    <>
    {/* // Hero */}
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2 className="text-5xl leading-10 tracking-tight text-black sm:text-3xl sm:leading-none md:text-3xl">
                Lindungi Ternak Anda dengan Pintar!
            </h2>
            <h2
                className="text-4xl font-bold leading-10 tracking-tight text-black sm:text-3xl sm:leading-none md:text-3xl">
                Agromind AI
                <span className="font-bold text-black">to the Future</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Deteksi dini penyakit sapi anda dengan akurat dan cepat. Website kami membantu peternak mengenali gejala-gejala penyakit pada sapi, sehingga tindakan pencegahan dan pengobatan dapat dilakukan lebih awal. Kesehatan ternak, keuntungan melimpah.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
                <div className="rounded-md shadow"><a href=""
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-black transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-3xl hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Getting started !
                    </a></div>
                </div>
            </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div className="relative w-full p-3 rounded  md:p-8">
                <div className="rounded-lg text-black w-full">
                    <img src="public/Landingpage/background.png" />
                </div>
            </div>
        </div>
    </div>

    {/* // Features */}
    <div className=" bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan Pada AgroMind AI</h2>
          <p className="text-gray-600 mb-10">
            Kami terus berupaya untuk membantu anda dalam mengatasi masalah pada sapi anda
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Diagnosa Card */}
            <a href="#diagnosa" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-500 text-xl">📊</span>
                </div>
                <h3 className="text-gray-900 font-medium">Diagnosa</h3>
            </a>
            {/* Data Penyakit Card */}
            <a href="#diagnosa" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-500 text-xl">📚</span>
                </div>
                <h3 className="text-gray-900 font-medium">Data Penyakit</h3>
            </a>
            {/* Info Nutrisi Card */}
            <a href="#nutrisi" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-500 text-xl">🍏</span>
                </div>
                <h3 className="text-gray-900 font-medium">Info Nutrisi</h3>
            </a>
            </div>
        </div>
    </div>

    {/* Diagnosa and Informasi */}
    <div id='diagnosa' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Card - Link to Diagnose Page */}
          <a href="/diagnose" className="text-center hover:bg-gray-100 p-4 rounded-lg border border-gray-300">
            <img src="public/Landingpage/stopvirus.png" alt="Animal Disease Information" className="mx-auto h-48 mb-4" />
            <h3 className="text-xl font-semibold">Diagnosa Penyakit Ternak Anda Sekarang</h3>
          </a>
          
          {/* Second Card - Link to Info Page */}
          <a href="/infopenyakit" className="text-center hover:bg-gray-100 p-4 rounded-lg border border-gray-300">
            <img src="public/Landingpage/virus.png" alt="Animal Disease Information" className="mx-auto h-48 mb-4" />
            <h3 className="text-xl font-semibold">Informasi Data Penyakit Hewan Ternak</h3>
          </a>
        </div> 
        {/* Pembatas antara Diagnosa dan Informasi */}
        <div className="border-t border-gray-300 my-8"></div>
      </div>
    </div>

    {/*Nutrisi*/}
    <div id='nutrisi' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Berikan Nutrisi Terbaik Pada Sapi Anda</h2>
          <p className="text-gray-600 mb-6">
            Investasikan masa depan peternakan anda dengan nutrisi yang tepat. Nutrisi yang baik akan membantu sapi anda tumbuh sehat, kuat, dan tahan terhadap penyakit. Mulailah dengan memberikan pakan yang kaya nutrisi hari ini.
          </p>
          <div className="flex justify-center mb-6">
            <img
              src="public/Landingpage/image.png"
              alt="Nutrisi Pangan"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
            <a href="/infonutrisi" className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-3xl hover:bg-yellow-600 focus:outline-none">
              Nutrisi Pangan
            </a>
        </div>
      </div>

      {/* Section Diskusi */}
      {/* 
      <div className="bg-yellow-50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Diskusi</h2>
          <div className="bg-yellow-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <p className="text-gray-800 text-left font-medium mb-2">
              Bagaimana cara mencegah dan mengobati penyakit brucellosis pada sapi?
            </p>
            <p className="text-gray-700 text-left text-sm mb-1">
              oleh: Pak Hanan
            </p>
            <p className="text-gray-700 text-left text-sm">
              Penyakit brucellosis dapat menyerang sapi pada saat-saat tertentu. Pencegahan terbaik meliputi vaksinasi, menjaga kebersihan kandang, dan membatasi kontak dengan hewan lain. Untuk pengobatan, antibiotik kadang efektif setelah sapi terinfeksi secara serius.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
          </div>
        </div>
      </div>
      */}

      {/* Section Pertanyaan */}
      {/* 
      <div className="bg-blue-900 py-16">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-semibold mb-6">
            Punya pertanyaan seputar peternakan sapi?
          </h2>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="berikan pertanyaanmu disini"
              className="px-4 py-3 rounded-l-full w-3/4 md:w-2/3 text-gray-700"
            />
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-r-full hover:bg-yellow-600 focus:outline-none">
              kirim
            </button>
          </div>
        </div>
      </div>
      */}
    </>
  )
}

export default Landingpage
