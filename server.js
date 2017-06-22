const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const cors = require('cors')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MO_photo_app');

const routes = './routes';
const photos = require('./routes/photos');


app.use(cors());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('photos', __dirname + '/public/images');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', { title: 'Index Page' })
})



app.use('/photos', photos);


app.listen(3000, () => {
  console.log('live on 3000')
})
