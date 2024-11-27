import React from "react";
import { useState, useRef } from "react";

function DiagnosePage() {
  const [imageSrc, setImageSrc] = useState("");
  const imagePreviewRef = useRef(null);

  // Fungsi untuk menangani upload gambar
  const loadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result); // Menyimpan URL gambar ke state
      };
      reader.readAsDataURL(file);
    }
  };
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
    <div class="bg-yellow-100 p-6 rounded-lg w-full max-w-lg">
        <h2 class="text-center font-semibold text-lg mb-4">Diagnosa</h2>
        <div class="grid grid-cols-3 gap-2 md:grid-cols-5 mb-4 text-sm">
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 1 
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 2
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 3
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 4
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 5
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 6
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 7
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 8
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 9
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 10
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 11
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 12
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 13
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 14
            </label>
            <label class="flex items-center">
                <input type="checkbox" class="mr-2" /> Gejala 15
            </label>
        </div>
          <div class="flex justify-center">
              <a href="/hasil" class="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]">
                  Upload Gejala
              </a>
          </div>
          </div>
      </div>
    </>
  );
}

export default DiagnosePage;
