const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/food-routes');
const loginRoutes = require('./routes/login-routes');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/food', foodRoutes);
app.use('/login',loginRoutes);

mongoose.connect(keys.mongodb.dbURL, { useNewUrlParser: true },()=>{
	console.log('connected to mongodb');
});

// create home route
app.get('/', (req, res) => {
    res.send('test');
});

app.get('/profile',(req,res)=>{
	res.send('profile page');
});

	
app.listen(port, () => {
    console.log(`app now listening for requests on port ${port}`);
});