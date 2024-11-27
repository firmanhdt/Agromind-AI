import React, { useState } from "react";
import logo from "../assets/agromind.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [telepon, setTelepon] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      fullName: namaLengkap,
      email,
      password,
      phoneNumber: telepon,
      role,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Pendaftaran berhasil:", data);
      } else {
        console.error("Kesalahan pendaftaran:", data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="relative z-10 w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <img src={logo} alt="Logo Agromind AI" className="mx-auto w-100 h-24 mb-4" />
          <h2 className="text-2xl font-semibold text-orange-600">AGROMIND AI</h2>
          <p className="text-sm font-medium text-gray-600">Mari Beternak Bersama Agromind</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Alamat Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Nomor Telepon"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg">
            Daftar Akun
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;