const http = require('http');
const express = require('express');


const path = require('path');

const productControllers = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyparser = require('body-parser');
const router = require('./routes/admin');

const app = express();


app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.routes);

app.use(shopRoutes.routes);


app.use(productControllers.geterror);


app.listen(3000);

// access information about the request