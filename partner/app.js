var express = require('express')
var {engine} = require('express-handlebars')
var route = require('./routers');
const app = express();

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// middleware
app.use(express.json());
app.use(express.urlencoded());


route(app);
app.get('/', (req, res) => {
    res.render('getstart');
});


app.post('/a', (req,res) => {
  res.send('test a post')
})

app.get('/xperience', (req,res) => {
  res.render('xperience')
})

app.listen(3001, () => {
  console.log('Node server running @ http://localhost:3001')
})