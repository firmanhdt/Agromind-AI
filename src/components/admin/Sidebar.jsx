import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-5">
        <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center md:ml-64 ml-0">
            <span className="font-bold text-lg">Halo, Admin!</span>
            <span className="text-gray-500 text-sm ml-2">Selamat Datang Di AgromindAI</span>
          </div>
          <div className="flex items-center">
            {/* <img
              src="https://th.bing.com/th/id/OIP.9PPdes_WSxaqUQJxWab16AHaHa?rs=1&pid=ImgDetMain" // Ganti dengan path gambar profil yang sesuai
              alt="Profile"
              className="w-8 h-8 rounded-full"
            /> */}
            <span className="px-5">Admin</span>
          {/* Hamburger Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full border-r transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300  md:translate-x-0 z-40`}
      >
          {/* Profil Pengguna */}
          <div className="flex items-center py-5 px-5">
            {/* Avatar */}
            {/* <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-3"
            /> */}
            {/* Nama dan Role */}
            <div className="text-sm">
              <h2 className="font-medium">AGROMINDAI</h2>
              {/* <div className="font-medium">Refiani Julianti</div> */}
              {/* <div className="text-gray-500 text-xs">Admin</div> */}
            </div>
          </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/admin"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                  isActive('/dashboard') 
                    ? 'border-emerald-500 text-emerald-500 bg-emerald-50'
                    : 'border-transparent hover:border-emerald-500'
                } pr-6`}
              >
                <span className={`inline-flex justify-center items-center ml-4 ${
                  isActive('/dashboard') ? 'text-emerald-500' : ''
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Data
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/admin/pengunjung"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                  isActive('/pengunjung') 
                    ? 'border-emerald-500 text-emerald-500 bg-emerald-50'
                    : 'border-transparent hover:border-emerald-500'
                } pr-6`}
              >
                <span className={`inline-flex justify-center items-center ml-4 ${
                  isActive('/pengunjung') ? 'text-emerald-500' : ''
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Pengunjung
                </span>
              </Link>
              {/* <Link
                to="/admin/profile"
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                  isActive('/profile') 
                    ? 'border-emerald-500 text-emerald-500 bg-emerald-50'
                    : 'border-transparent hover:border-emerald-500'
                } pr-6`}
              >
                <span className={`inline-flex justify-center items-center ml-4 ${
                  isActive('/profile') ? 'text-emerald-500' : ''
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Pengaturan
                </span>
              </Link> */}
            </li>
          </ul>
          <li>
          <Link
            to="/"
            className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
              isActive('/') 
                ? 'border-red-500 text-red-500 bg-red-50'
                : 'border-transparent hover:border-red-500'
            } pr-6`}
          >
            <span className={`inline-flex justify-center items-center ml-4 ${
              isActive('/') ? 'text-red-500' : ''
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h15" />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </Link>
        </li>
        </div>
      </div>
      </>
  );
}

export default Sidebar;
