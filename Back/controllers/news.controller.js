const News = require('../models/news');
const newsCtrl = {};

newsCtrl.getNews = async(req, res) => {
    const news = await News.find();
    res.json(news);
}

newsCtrl.createNews = async(req, res) => {
    const news = new News(req.body);
    await news.save();
    res.json({ status: 'New Saved' })

}

newsCtrl.editNew = async(req, res) => {
    const { id } = req.params;
    const news = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        content: req.body.content,
        author: req.body.author,
        archiveDate: req.body.archiveDate,
        archived: req.body.archived
    };
    await News.findByIdAndUpdate(id, { $set: news });
    res.json({ status: 'New Updated' })

}

module.exports = newsCtrl;