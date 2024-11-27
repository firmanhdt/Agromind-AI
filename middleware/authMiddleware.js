import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

// Middleware untuk validasi pendaftaran
export const validateRegistration = [
  body('fullName').notEmpty().withMessage('Nama lengkap harus diisi'),
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password harus memiliki minimal 6 karakter'),
  body('phoneNumber').notEmpty().withMessage('Nomor HP harus diisi'),
];

// Middleware untuk menangani kesalahan validasi
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Ekspor fungsi authenticate dan authorize
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Access forbidden' });
  }
  next();
};
