import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { restaurants } from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

//dynamic stuff for the new pages
app.get('/restaurants', (req, res) => {
  res.render('restaurants', { restaurants });
});

app.get('/new-restaurant', (req, res) => {
  res.render('new-restaurant');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});