const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/food-routes');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/food', foodRoutes);


// set view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
    res.send('test');
});

app.listen(port, () => {
    console.log(`app now listening for requests on port ${port}`);
});