import mongoose from 'mongoose';

const pengunjungSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true },
  nama: { type: String, required: true },
  email: { type: String, required: true },
  no_hp: { type: String, required: true },
  role: { type: String, default: 'user', enum: ['user'] },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export default mongoose.model('Pengunjung', pengunjungSchema);
