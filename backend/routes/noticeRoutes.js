// routes/noticeRoutes.js
import express from 'express';
import Notice from '../models/Notice.js';

const router = express.Router();

// Create new Notice
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    const notice = new Notice({ title, description });
    await notice.save();

    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// Get all Notices
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

export default router;
