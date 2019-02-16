const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/food-routes');
const loginRoutes = require('./routes/login-routes');
const cookieSession = require('cookie-session');
const port = process.env.PORT || 3000;
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000,
	keys: [keys.session.cookieKey]
}));
mongoose.connect(keys.mongodb.dbURL, { useNewUrlParser: true },()=>{
	console.log('connected to mongodb');
});
app.use(passport.initialize());
app.use(passport.session());
app.use('/food', foodRoutes);
app.use('/login',loginRoutes);




// create home route
app.get('/', (req, res) => {
    res.send('test');
});

//app.get('/profile',(req,res)=>{
//	res.send('profile page');
//});

	
app.listen(port, () => {
    console.log(`app now listening for requests on port ${port}`);
});