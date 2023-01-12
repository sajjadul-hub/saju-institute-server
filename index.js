const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
///////////////////////////////////////////////????????????????/////////////
app.use(cors());
//Category...................................
const categories = require('./data/categories.json');
const news = require('./data/news.json');
app.get('/', (req, res) => {
    res.send('News APi Running');
})
//news------------------
app.get('/news-categories', (req, res) => {
    res.send(categories);
})
//category with id--------------------------------
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})
////////new----------------
app.get('/news', (req, res) => {
    res.send(news);
})
/////////news with id-------------------
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.listen(port, () => {
    console.log('Dragon News Server running on port');
})