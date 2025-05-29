const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const upload = require('../middlewares/cloudinary'); // Ensure correct path

router.get('/', newsController.getAllNews);
router.post('/', upload.single('image'), newsController.createNews);
router.get('/:id', newsController.getNewsById);

module.exports = router;