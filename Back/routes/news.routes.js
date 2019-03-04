const express = require('express');
const router = express.Router();
const news = require('../controllers/news.controller');

router.get('/', news.getNews);
router.post('/', news.createNews);
router.put('/:id', news.editNew);

module.exports = router;