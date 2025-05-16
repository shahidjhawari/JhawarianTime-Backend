const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const upload = require('../middlewares/upload');

// GET all news
router.get('/', newsController.getAllNews);

// POST create new news
router.post('/', upload.single('image'), newsController.createNews);

// GET single news
router.get('/:id', newsController.getNewsById);

module.exports = router;