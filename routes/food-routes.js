const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('food');
});


//router.get('/login', (req, res) => {
//    res.render('login', { user: req.user });
//});


module.exports = router;
