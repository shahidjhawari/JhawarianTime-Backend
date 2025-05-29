const News = require('../models/News');

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new news
exports.createNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    // Cloudinary سے تصویر کا یو آر ایل (اگر فائل موجود ہو)
    const imageUrl = req.file ? req.file.path : '';

    const news = new News({
      title,
      description,
      image: imageUrl // یہاں Cloudinary URL آئے گی
    });

    const savedNews = await news.save();
    res.status(201).json(savedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get single news item
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};