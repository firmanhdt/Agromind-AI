import express from 'express';
import { validateRegistration, handleValidationErrors } from '../middleware/authMiddleware.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Pengunjung from '../models/Pengunjung.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { fullName, email, password, phoneNumber, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const newUser = new User({
      fullName,
      email,
      password,
      phoneNumber,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: 'Pendaftaran berhasil' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }

  // Mendapatkan jumlah pengunjung saat ini untuk membuat nomor unik
  const pengunjungCount = await Pengunjung.countDocuments();
  const newPengunjung = new Pengunjung({
    no: pengunjungCount + 1, // Menghasilkan nomor unik
    nama: fullName,
    email,
    no_hp: phoneNumber,
  });

  await newPengunjung.save();
  
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    console.log("Password yang dimasukkan:", password);
    console.log("Password yang disimpan di database:", user.password);

    if (user.password !== password) {
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ fullName: user.fullName, email: user.email, role: user.role, token, message: 'Login berhasil woy' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
});

// Ekspor router sebagai default
export default router;
