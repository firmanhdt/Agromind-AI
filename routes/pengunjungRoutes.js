import express from 'express';
import Pengunjung from '../models/Pengunjung.js';

const router = express.Router();

// Rute untuk mendapatkan daftar pengunjung
router.get('/pengunjungs', async (req, res) => {
  try {
    const pengunjungs = await Pengunjung.find();
    res.status(200).json(pengunjungs);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
});

export default router;
