import React from 'react';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
      // Ganti "/detail" dengan route tujuan Anda
      navigate(`/admin/pengaturan`);
    };
  return (
    <div className="p-4 py-13 lg:ml-64 flex-1 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-start">Profil Admin</h1>
      <p className="text-gray-600 mb-6 text-start">
        Ini adalah halaman berisi profil admin
      </p>

      <div className="flex items-center mb-8">
        <img 
          src="https://th.bing.com/th/id/OIP.9PPdes_WSxaqUQJxWab16AHaHa?rs=1&pid=ImgDetMain" 
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold text-start">Refiani Julianti</h2>
          <p className="text-gray-600 text-start">Pengelola Admin AGROMINDAI</p>
        </div>
        <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded"
         onClick={handleDetailClick}>
          Edit
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-center">Informasi Pribadi</h3>
        
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Nama Lengkap</p>
            <p className="text-gray-600">Refiani Julianti3</p>
          </div>
          
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">refianijulianti@gmail.com</p>
          </div>
          
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Nomor Telepon</p>
            <p className="text-gray-600">0812-1985-3387</p>
          </div>
          
          <div className="flex justify-between items-center pb-4 border-b">
            <p className="font-semibold">Bio</p>
            <p className="text-gray-600">Pengelola AGROMINDAI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
