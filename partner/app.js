var express = require('express')
var {engine} = require('express-handlebars')

const app = express();

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('getstart');
});

app.get('/login', (req,res) => {
  res.render('login')
})

app.get('/signup', (req,res) => {
  res.render('signup')
})

app.get('/home', (req,res) => {
  res.render('home')
})

app.get('/xperience', (req,res) => {
  res.render('xperience')
})

app.listen(3000, () => {
  console.log('Node server running @ http://localhost:3000')
})