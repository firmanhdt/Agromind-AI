import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Rute untuk mendapatkan daftar user
router.get('/pengunjungs', async (req, res) => {
  try {
    const users = await User.find(
      { role: 'user' },
      'fullName email phoneNumber createdAt'
    ).sort({ createdAt: -1 });
    
    console.log("Data yang dikirim:", users);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
});

// Rute untuk menambah pengunjung baru
router.post('/pengunjungs', async (req, res) => {
  try {
    const newPengunjung = new Pengunjung({
      ...req.body,
      createdAt: new Date()
    });
    await newPengunjung.save();
    res.status(201).json(newPengunjung);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
});

// Tambahkan route delete
router.delete('/pengunjungs/:id', async (req, res) => {
  try {
    console.log("Mencoba menghapus user dengan ID:", req.params.id); // Debugging
    
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    console.log("Hasil penghapusan:", deletedUser); // Debugging
    
    if (!deletedUser) {
      return res.status(404).json({ 
        message: 'User tidak ditemukan',
        requestedId: req.params.id 
      });
    }
    
    res.status(200).json({ 
      message: 'User berhasil dihapus', 
      deletedUser 
    });
  } catch (error) {
    console.error("Error saat menghapus:", error); // Debugging
    res.status(500).json({ 
      message: 'Terjadi kesalahan', 
      error: error.message,
      requestedId: req.params.id 
    });
  }
});

export default router;
