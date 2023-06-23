const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express();

const uri = 'mongodb+srv://sarthak:Awasthi123@urlshortner.e9awbbv.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  let query = {};

  if (req.query.search) {
    query = { title: { $regex: req.query.search, $options: 'i' } };
  }

  const shortUrls = await ShortUrl.find(query);
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  const { title, fullUrl } = req.body;
  await ShortUrl.create({ title, full: fullUrl, clicks: 0 });

  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl === null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});
