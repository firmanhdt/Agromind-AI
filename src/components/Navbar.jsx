import React, { useState } from 'react';
import logo from "../assets/agromind.png";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)
    const userName = localStorage.getItem('fullName'); // Get the logged-in user's name
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('fullName');
        setToggle(false)
        navigate('/'); // Redirect to home after logout
    };


  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1200px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src={logo} alt="Logo" className='h-[90px] w-[120px]' />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4'>
                    <li>
                    <a href="/" className='hover:text-orange-700'>Beranda</a>
                    </li>
                    <li>
                    <a href="/" className='hover:text-orange-700'>Fitur</a>
                    </li>
                    <li>
                    <a href="/" className='hover:text-orange-700'>Diskusi</a>
                    </li>
                    <li>
                    <a href="/" className='hover:text-orange-700'>Kontak</a>
                    </li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    {userName ? (
                        <div className='space-x-4 flex items-center'>
                            <span>{`Welcome, ${userName}`}</span>
                            <button className='px-4 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-600' onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <button className='bg-[#362B0E] text-white py-2 px-4 rounded-2xl hover:bg-[#1f1808]' onClick={() => navigate('/login')}>Login</button>
                    )}
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={hamburgerMenu} alt="Close" />
                </div>
        </div>
        
        <div className={toggle?'absolute z-20 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
            <ul>
                <li>
                <a href="#beranda" className='hover:text-orange-700'>Beranda</a>
                </li>
                <li>
                <a href="#fitur" className='hover:text-orange-700'>Fitur</a>
                </li>
                <li>
                <a href="#diskusi" className='hover:text-orange-700'>Diskusi</a>
                </li>
                <li>
                <a href="#kontak" className='hover:text-orange-700'>Kontak</a>
                </li>
                <div className='flex flex-col my-4 gap-4'>
                    {userName ? (
                        <div className='space-x-4'>
                            <button onClick={handleLogout} className='px-8 py-5 rounded-2xl bg-red-500 w-full text-white font-bold'>Logout</button>
                        </div>
                    ) : (
                        <button onClick={() => {
                        navigate('/login')
                        setToggle(false)
                        }} className='px-8 py-5 rounded-2xl bg-[#362B0E] text-white font-bold'>Login</button>
                    )}
                </div>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar